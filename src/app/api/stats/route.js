import { NextResponse } from "next/server";

export async function GET() {
  // Graceful default fallbacks
  const stats = {
    leetcode: { rating: 1703, solved: 923 },
    codeforces: { rating: 1380, solved: 138 },
    codingNinjas: { level: 8, solved: 240 }
  };

  // 1. Fetch LeetCode Data
  try {
    const leetcodeRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
            userContestRanking(username: $username) {
              rating
            }
          }
        `,
        variables: { username: "shib11" }
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (leetcodeRes.ok) {
      const resData = await leetcodeRes.json();
      const data = resData.data;
      if (data?.matchedUser) {
        const solvedNum = data.matchedUser.submitStatsGlobal.acSubmissionNum.find(
          (item) => item.difficulty === "All"
        );
        if (solvedNum) {
          stats.leetcode.solved = solvedNum.count;
        }
      }
      if (data?.userContestRanking) {
        stats.leetcode.rating = Math.round(data.userContestRanking.rating);
      }
    }
  } catch (err) {
    console.error("LeetCode fetch failed, using fallback:", err.message);
  }

  // 2. Fetch Codeforces Info (Rating)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4-second timeout limit

    const cfInfoRes = await fetch("https://codeforces.com/api/user.info?handles=shibchandan11", {
      signal: controller.signal,
      next: { revalidate: 3600 }
    });
    
    clearTimeout(timeoutId);

    if (cfInfoRes.ok) {
      const data = await cfInfoRes.json();
      if (data.status === "OK" && data.result && data.result.length > 0) {
        const user = data.result[0];
        if (user.rating) {
          stats.codeforces.rating = user.rating;
        }
      }
    }
  } catch (err) {
    console.error("Codeforces info fetch failed, using fallback:", err.message);
  }

  // 3. Fetch Codeforces Status (Unique Solved Count)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const cfStatusRes = await fetch("https://codeforces.com/api/user.status?handle=shibchandan11", {
      signal: controller.signal,
      next: { revalidate: 3600 }
    });

    clearTimeout(timeoutId);

    if (cfStatusRes.ok) {
      const data = await cfStatusRes.json();
      if (data.status === "OK" && data.result) {
        const solvedProblems = new Set();
        for (const sub of data.result) {
          if (sub.verdict === "OK" && sub.problem) {
            solvedProblems.add(`${sub.problem.contestId}-${sub.problem.index}`);
          }
        }
        if (solvedProblems.size > 0) {
          stats.codeforces.solved = solvedProblems.size;
        }
      }
    }
  } catch (err) {
    console.error("Codeforces status fetch failed, using fallback:", err.message);
  }

  // Set Cache Headers for client requests
  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600"
    }
  });
}
