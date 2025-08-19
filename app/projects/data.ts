export interface Project {
  id: string;
  name: string;
  summary: string;
  image?: string;
  link?: string;
  lead?: string;
  status: "ongoing" | "completed";
  category: "ai-ml" | "security" | "iot" | "blockchain" | "testing";
}

export const projects: Project[] = [
  {
    id: "se4ai",
    name: "Software Engineering for Robust and Explainable AI",
    summary: "This research integrates software engineering techniques such as combinatorial testing (CT) and delta debugging into the development of robust and explainable AI systems. CT is employed to construct surrogate models by systematically sampling diverse feature interactions and to optimize hyperparameter tuning by reducing configuration space while preserving key interactions. Delta debugging is adapted to deep neural networks to identify minimal, causally sufficient subsets of feature maps that influence decisions, resulting in compact and interpretable saliency maps. Together, these methods provide a principled framework for enhancing AI robustness and interpretability.",
    image: "se4ai.png",
    status: "ongoing",
    category: "ai-ml",
    lead: "Dr. Yu Lei"
  },
  {
    id: "fairness-testing",
    name: "Fairness Testing of Black Box Machine Learning Models",
    summary: "Decision-making by ML systems can exhibit biases, resulting in unfair outcomes for different individuals. This work presents a novel method based on t-way testing in a VAE&apos;s latent space to systematically explore the search space. By decoding these latent-space samples, our approach generates highly natural instances that find the fairness violations in a black box setting.",
    image: "testing_in_ml.png",
    link: "https://ajdahal.github.io/portfolio/fairness_testing.html",
    status: "ongoing",
    category: "ai-ml",
    lead: "Arjun Dahal"
  },
  {
    id: "surrogate-model",
    name: "Constructing Good Surrogate Model for Machine Learning",
    summary: "Understanding and interpreting the decision-making process of black-box machine learning models is often challenging, making their predictions less transparent. As ML models are increasingly adopted in sensitive domains like healthcare and finance, ensuring trustworthy and accountable decision-making is critical. This project aims to use surrogate models—simpler, interpretable models that approximate the behavior of complex black-box systems—to improve transparency. These models are easy to analyze and can also be valuable tools in studying adversarial attacks. We are exploring innovative techniques to construct effective surrogate models for black-box ML systems.",
    status: "ongoing",
    category: "ai-ml",
    lead: "Sunny Shree"
  },
  {
    id: "privacy-attacks-explanations",
    name: "Privacy Attacks Leveraging Model Explanations",
    summary: "Machine learning systems are inherently vulnerable to privacy attacks, which can extract various aspects of the model, including its training data, model parameters, and sensitive attributes related to the training data. Moreover, model explanations can inadvertently disclose additional information that further aids such attacks. The goal is to assess the extent to which we can recover information from the model by leveraging this additional information.",
    link: "https://nine-monday-454.notion.site/Privacy-Attacks-Leveraging-Model-Explanations-143bbf0f6a98805ab4f0c7e2bbf86ec2?source=copy_link",
    status: "ongoing",
    category: "ai-ml",
    lead: "Pujan Budhathoki"
  },
  {
    id: "smart-contracts",
    name: "Security Analysis of Ethereum Smart Contracts",
    summary: "Ethereum blockchain is the decentralized platform for Ether (ETH, cryptocurrency ether) and smart contracts. Ether is second only to Bitcoin in market capitalization. Smart contracts enable Ethereum to remove the need for a third party to handle transactions between peers, which can reduce the time and save money. They are either all or part of the backends of the distributed applications (Dapps). Since smart contracts are mainly involved in financially based transactions, security is a major concern for wide application. The immutable nature makes this concern more serious as they are rather difficult to patch. Therefore, security analysis of smart contracts is critical.",
    image: "smart_contracts.jpeg",
    link: "/projects/smart_contracts",
    status: "ongoing",
    category: "blockchain",
    lead: "Qiping Wei"
  },
  {
    id: "zigbee-fuzzing",
    name: "Fuzz Testing of Zigbee Protocol Implementation",
    summary: "Zigbee protocol is one of global most popular IoT wireless standards used by millions of devices and customers. It has also been deployed in NASA Mars mission as communication radio between flying drone and Perseverance rover. Recently, several vulnerabilities in Zigbee protocol implementations have compromised IoT devices from different manufacturers. It becomes imperative to perform security testing on Zigbee protocol implementations. Thus, this research project aims to apply existing state-of-art vulnerability detection techniques, such as fuzzing and data flow analysis, to Zigbee protocol implementations.",
    image: "zigbee.png",
    link: "/projects/zigbee_fuzzing",
    status: "ongoing",
    category: "iot",
    lead: "Mengfei Ren"
  }
]; 