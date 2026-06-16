export const projectsData = [
  {
    id: "shadowpay",
    title: "ShadowPay",
    subtitle: "Offline UPI Mesh Gateway",
    shortDescription: "A distributed peer-to-peer transaction gateway using cryptographic signatures and offline mesh routing.",
    fullDescription: "A decentralized offline payment routing network designed to enable secure peer-to-peer digital transactions in environments with zero internet connectivity. The system utilizes a custom Node.js client runtime connected to a native C++ cryptography engine for hardware-level signing, and synchronizes transactions across devices using a simulated wireless mesh network.",
    category: "Systems & Security",
    techStack: ["Node.js", "C++", "Windows CNG", "React", "MongoDB", "WebSockets"],
    githubLink: "https://github.com/shibchandan/shadowpay",
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Standard placeholder link
    features: [
      "Dynamic P2P mesh network simulation using a custom gossip protocol to discover nearby nodes.",
      "Hardware-accelerated cryptographic signing using Windows CNG APIs for secure digital signatures.",
      "Strict double-spend prevention through local vector clocks and transactional consensus gates.",
      "Interactive HTML5 Canvas visualization dashboard showcasing live network routing topology."
    ],
    challenges: [
      {
        problem: "Double-spending and replay attacks in an offline, asynchronous environment without a central authority or global clock.",
        solution: "Implemented vector clocks and logical causality tracking. Every transaction payload is digitally signed with RSA-2048 and contains a monotonically increasing sequence ID. The receiver validates these credentials against a locally cached transaction ledger with transactional idempotency gates in MongoDB, rejecting any back-dated or duplicated payloads."
      },
      {
        problem: "Performance limitations and latency of JavaScript runtimes when performing complex high-frequency cryptographic operations.",
        solution: "Developed a native C++ module wrapped using Node-API (N-API). Cryptographic functions are delegated directly to the Windows Cryptography Next Generation (CNG) APIs, delivering hardware-optimized execution and a 12x speedup in signing latency compared to pure JavaScript libraries."
      }
    ],
    learnings: [
      "Acquired deep understanding of distributed systems consensus, event ordering, and vector clocks.",
      "Gained hands-on experience in native C/C++ bindings in Node.js and systems-level resource allocations.",
      "Explored hardware-level cryptographic key management, AES-256-GCM data sealing, and digital signatures."
    ]
  },
  {
    id: "dpi-firewall",
    title: "Enterprise DPI Firewall",
    subtitle: "High-Performance Packet Analyzer",
    shortDescription: "A multi-threaded C++ engine for real-time packet interception, TCP reconstruction, and traffic analysis.",
    fullDescription: "A systems-level network security engine engineered in C++ to capture and inspect raw network packets at wire-speed. The application intercepts traffic via libpcap, groups packets into individual TCP streams based on 5-tuple metrics, inspects application-layer data (TLS Handshakes, HTTP headers), and flags anomalous activity using a custom regex rules engine.",
    category: "Systems & Security",
    techStack: ["C++", "libpcap", "Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    githubLink: "https://github.com/shibchandan/dpi-firewall",
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Kernel-level packet interception using Berkeley Packet Filters (BPF) and libpcap stream capture.",
      "High-speed 5-tuple stream tracking (Source/Dest IP, Source/Dest Port, Protocol) for TCP reconstruction.",
      "Deep Packet Inspection targeting TLS Server Name Indication (SNI) and HTTP Host headers.",
      "Responsive MERN dashboard connected via JSON-schema API to visualize bandwidth, protocol distribution, and security events."
    ],
    challenges: [
      {
        problem: "High packet drop rate during high-bandwidth network traffic caused by single-threaded packet processing bottlenecks.",
        solution: "Architected a producer-consumer thread pipeline. A single high-priority thread captures raw frames from the network interface and writes them to a thread-safe, lock-free ring buffer. A pool of worker threads consumes packets from the queue, performs protocol decoding, and updates session states, eliminating main-thread capture blockages."
      },
      {
        problem: "Memory leakage and state corruption when tracking thousands of concurrent TCP sessions with incomplete handshakes.",
        solution: "Utilized modern C++ smart pointers (std::unique_ptr, std::shared_ptr) and the Resource Acquisition Is Initialization (RAII) design pattern. Implemented a session manager with a sliding-window timeout mechanism to automatically clean up inactive or half-open TCP connections from the hash map, keeping memory usage constant."
      }
    ],
    learnings: [
      "Mastered low-level TCP/IP network protocol stack layers, socket options, and raw frame structure.",
      "Developed a deep command of multithreaded synchronization primitives including mutexes, locks, and condition variables.",
      "Learned to optimize performance for high-throughput I/O bound systems in Linux and Windows environments."
    ]
  },
  {
    id: "pragna-ai",
    title: "PragnaAI",
    subtitle: "Vector Database Engine",
    shortDescription: "A custom-built HNSW and KD-tree vector search system with a RAG pipeline and 3D visualization.",
    fullDescription: "A high-performance vector search engine written to store, index, and query high-dimensional vector embeddings generated by machine learning models. The engine features custom implementations of HNSW graphs for approximate nearest neighbor (ANN) search and KD-trees for exact search, integrated with a LangChain RAG pipeline and a WebGL index space visualizer.",
    category: "AI & Infrastructure",
    techStack: ["Next.js", "Three.js", "Python", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/shibchandan/pragna-ai",
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Custom Hierarchical Navigable Small World (HNSW) graph implementation for log-time vector similarity search.",
      "Custom KD-Tree spatial indexer for exact nearest neighbor matching in lower-dimensional vector fields.",
      "Support for multiple distance metrics including Cosine Similarity, L2 (Euclidean), and L1 (Manhattan) distances.",
      "Interactive 3D WebGL (Three.js) graph visualization displaying vector clusters and graph search traversals."
    ],
    challenges: [
      {
        problem: "Graph search latency and high memory overhead during index construction with large high-dimensional datasets.",
        solution: "Implemented memory-efficient vector storage using flat, contiguous arrays to maximize CPU cache hit rates. Optimized similarity math using SIMD (Single Instruction, Multiple Data) compiler intrinsics, reducing cosine distance computation time by 65% and speeding up index construction."
      },
      {
        problem: "Projecting and visualizing high-dimensional embeddings (e.g., 384D and 1536D vectors) in a human-understandable 3D interface.",
        solution: "Integrated client-side t-SNE and Principal Component Analysis (PCA) dimensionality reduction algorithms. The application dynamically projects high-dimensional coordinate vectors into 3D coordinates, allowing Three.js to render clusters and trace query search path traversals in real-time."
      }
    ],
    learnings: [
      "Gained comprehensive understanding of high-dimensional spatial indexes and geometric algorithms.",
      "Mastered 3D graphics rendering, shaders, and spatial transformations using WebGL/Three.js.",
      "Deepened knowledge of semantic search, document tokenization, and RAG architectures in AI."
    ]
  },
  {
    id: "knowledge-hub",
    title: "Campus Knowledge Hub",
    subtitle: "AI Academic Resource Platform",
    shortDescription: "MERN-based resource sharing platform with granular RBAC, virus scanning, and Cloudflare R2 storage.",
    fullDescription: "A robust academic document management and collaboration platform engineered to handle campus-wide file sharing and semantic text analysis. The project integrates an advanced directory system, automated malware checking, high-performance object storage, and multi-LLM artificial intelligence to answer questions directly from uploaded textbooks.",
    category: "Full Stack Platform",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Cloudflare R2", "JWT", "LangChain"],
    githubLink: "https://github.com/shibchandan/knowledge-hub",
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "Dynamic nested directory tree representing university courses, subjects, and resource materials.",
      "Object storage using Cloudflare R2 with pre-signed upload URLs and local disk storage fallback.",
      "Granular JWT Role-Based Access Control (RBAC) defining permissions for Students, Moderators, and Admins.",
      "AI semantic chat integrated via LangChain to allow users to summarize, translate, and query PDF documents."
    ],
    challenges: [
      {
        problem: "Server timeouts and resource starvation when users uploaded large files (up to 100MB) for malware scanning.",
        solution: "Re-engineered the file upload lifecycle. Large files are uploaded directly from the client to Cloudflare R2 using secure, time-limited pre-signed URLs. The upload triggers a microservice that downloads and scans the file using the ClamAV API asynchronously, marking the file metadata database record as verified only after clean results are returned."
      },
      {
        problem: "Slow database query speeds and search latencies when users traversed nested directories with thousands of files.",
        solution: "Designed normalized MongoDB schemas with compound indexing on path variables (`parent_id`, `name`). Implemented database-level text indexing and full-text search, reducing folder traversal query latency from 240ms to less than 8ms."
      }
    ],
    learnings: [
      "Acquired deep knowledge of cloud object storage architecture, pre-signed URLs, and edge CDNs.",
      "Developed security-first upload sanitization, virus scans, and robust JWT session authorization gates.",
      "Built production-ready RAG workflows using document splitters, vector databases, and LLM APIs."
    ]
  }
];
