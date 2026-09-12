import { TechnologyAsset } from "../types";

export const TECHNOLOGY_ASSETS: TechnologyAsset[] = [
  {
    id: "01",
    name: "NeuroAI",
    subtitle: "Spiking Neural Networks & Neuromorphic Compute",
    slug: "neuroai",
    category: "Neurotechnology & Edge Compute",
    description:
      "Ultra-low latency biologically-inspired Spiking Neural Network (SNN) algorithms optimized for neuromorphic hardware architectures and asynchronous event processor acceleration.",
    status: "PROTOTYPE",
    trl: "Indicative internal TRL assessment: TRL 3 (Analytical & Experimental Critical Function)",
    evidenceLevel: "EXPERIMENTAL",
    technologies: [
      "Spiking Neural Networks (SNN)",
      "Neuromorphic Event Processing",
      "Surrogate Gradient Learning",
      "STDP Plasticity Rules",
      "Spiking-JAX / PyTorch-SNN"
    ],
    applications: [
      "Ultra-low power sensory processing",
      "Event-driven anomaly detection",
      "Sub-millisecond robotic control loops",
      "Wearable neural signal decoding"
    ],
    targetIndustries: [
      "Semiconductors",
      "Defense & Aerospace",
      "Medical Devices",
      "Autonomous Robotics"
    ],
    commercialModels: [
      "Technology Licensing",
      "Joint Development",
      "Asset Acquisition"
    ],
    licensingPotential: "High - Modular IP ready for chipmaker integration",
    nextMilestone: "FPGA hardware co-simulation benchmarking with event cameras",
    demonstrator: "Experimental SNN temporal pattern processing simulator",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Traditional dense Artificial Neural Networks require high compute power and memory bandwidth, making real-time, microsecond signal processing on constrained edge devices energy-prohibitive.",
    architectureDescription:
      "Event-driven temporal encoder converting raw signal streams into microsecond asynchronous spikes, processed through dynamic leaky integrate-and-fire (LIF) network topologies.",
    potentialStrategicBuyers: [
      "Neuromorphic Silicon Vendors",
      "Defense Technology Contractors",
      "Edge AI Chip Designers",
      "Wearable Healthtech Enterprises"
    ],
    architectureLayerIds: [1, 2, 3]
  },
  {
    id: "02",
    name: "NeuroMusic",
    subtitle: "Real-time Generative Soundscapes & Synthetic EEG Audio",
    slug: "neuromusic",
    category: "Affective Computing & Audio AI",
    description:
      "Real-time bio-generative audio engine mapping cortical frequency bands (alpha, beta, theta, gamma) into dynamic spatial soundscapes for focus, sleep modulation, and cognitive state entrainment.",
    status: "DEMONSTRATOR",
    trl: "Indicative internal TRL assessment: TRL 4 (Component Verification in Laboratory Environment)",
    evidenceLevel: "DEMONSTRATED",
    technologies: [
      "Synthetic EEG Signal Processing",
      "WebAudio Spatial DSP Engine",
      "Phase-Locked Isochronic Generation",
      "Neural Frequency Mapping",
      "Hardware-Agnostic Signal Adapter"
    ],
    applications: [
      "Cognitive performance optimization",
      "Neuro-wellness & stress reduction apps",
      "Adaptive game soundtrack engines",
      "Therapeutic sensory environments"
    ],
    targetIndustries: [
      "Digital Health & Wellness",
      "Spatial Computing / XR",
      "Gaming & Interactive Media",
      "Neurotechnology Labs"
    ],
    commercialModels: [
      "B2B SaaS / SDK License",
      "OEM Integration",
      "Asset Acquisition"
    ],
    licensingPotential: "Immediate - Standalone software engine & Web API ready",
    nextMilestone: "Multi-channel hardware EEG Bluetooth stream integration",
    demonstrator: "Interactive web-based synthetic EEG soundscape generator",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Existing wellness audio platforms rely on static pre-recorded audio tracks that cannot adapt dynamically to an individual's changing neural states or bio-feedback signals.",
    architectureDescription:
      "Hardware-agnostic EEG bio-signal ingestion pipeline feeding a parametric neural audio synthesizer with zero-latency buffer modulation.",
    potentialStrategicBuyers: [
      "Digital Health & Meditation Apps",
      "Neurotech Hardware OEMs",
      "XR Headset & Audio Manufacturers",
      "Consumer Wellness Conglomerates"
    ],
    architectureLayerIds: [1, 2, 3, 5]
  },
  {
    id: "03",
    name: "NeuroLight",
    subtitle: "Biometric Lighting & Photonic Entrainment",
    slug: "neurolight",
    category: "Biometric IoT & Smart Environments",
    description:
      "Closed-loop circadian and cortical entrainment lighting system dynamically driving multi-channel LED spectra according to biometric heart rate variability (HRV) and neural oscillation states.",
    status: "PROTOTYPE",
    trl: "Indicative internal TRL assessment: TRL 3 (Analytical & Experimental Proof of Concept)",
    evidenceLevel: "EXPERIMENTAL",
    technologies: [
      "Multi-channel Photonic Control",
      "Biometric HRV Spectral Mapping",
      "Closed-loop Entrainment Algorithms",
      "Matter/Zigbee Protocol Adapter"
    ],
    applications: [
      "Smart habitat circadian alignment",
      "Clinical sleep laboratory enhancement",
      "High-stress operator environment modulation",
      "Commercial wellness architecture"
    ],
    targetIndustries: [
      "Smart Home / Habitat OS",
      "Healthcare Architecture",
      "Aeronautics & Defense",
      "Commercial Lighting OEMs"
    ],
    commercialModels: [
      "OEM Integration",
      "Joint Development",
      "Technology Licensing"
    ],
    licensingPotential: "High - Microcontroller firmware IP for smart lighting manufacturers",
    nextMilestone: "Dual-spectrum LED driver PCB pilot validation",
    demonstrator: "Hardware-in-the-loop photic entrainment simulator",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Conventional circadian lighting uses rigid timer schedules, failing to respond to an individual's real-time physiological stress, fatigue, or cognitive workload.",
    architectureDescription:
      "Biometric sensor telemetry ingest layer feeding a closed-loop controller that modulates sub-perceptual light pulses and spectral ratios.",
    potentialStrategicBuyers: [
      "Global Lighting Solution Providers",
      "Smart Home Ecosystem Vendors",
      "Automotive Interior OEMs",
      "Clinical Infrastructure Builders"
    ],
    architectureLayerIds: [1, 2, 4, 6, 7]
  },
  {
    id: "04",
    name: "Brain-to-World",
    subtitle: "Direct Spatial Intent & Teleoperation Interfaces",
    slug: "brain-to-world",
    category: "Neurotechnology & Human-Computer Interaction",
    description:
      "Spatial intent translation framework transforming non-invasive neural intent and micro-gestures into direct 6-DOF physical teleoperation commands for drones, robotic arms, and virtual avatars.",
    status: "EXPERIMENTAL",
    trl: "Indicative internal TRL assessment: TRL 3 (Lab Validation of Intent Pipelines)",
    evidenceLevel: "EXPERIMENTAL",
    technologies: [
      "Motor Imagery Classifier",
      "Spatial Transformer Kinematics",
      "6-DOF Teleoperation Mapping",
      "Predictive Latency Compensation"
    ],
    applications: [
      "Hands-free robotic teleoperation",
      "Spatial computing gesture augmentation",
      "Industrial hazardous environment control",
      "High-grade physical accessibility"
    ],
    targetIndustries: [
      "Robotics & Automation",
      "Spatial Computing / XR",
      "Industrial Safety",
      "Defense Teleoperations"
    ],
    commercialModels: [
      "Joint Development",
      "Enterprise Licensing",
      "Asset Acquisition"
    ],
    licensingPotential: "Medium - Core spatial intent decoding patent-pending algorithms",
    nextMilestone: "ROS2 (Robot Operating System) bridge integration test",
    demonstrator: "Synthetic neural spatial cursor and robotic end-effector controller",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Traditional physical teleoperation interfaces rely on bulky joysticks or visual tracking, creating high cognitive load and latency for complex spatial tasks.",
    architectureDescription:
      "Multimodal neural intent vector classifier mapping user spatial target predictions directly to robotic inverse kinematics trajectories.",
    potentialStrategicBuyers: [
      "Spatial Computing Hardware Makers",
      "Industrial Robotics Integrators",
      "Teleoperation & Drone Defense Companies",
      "Assistive Tech Enterprises"
    ],
    architectureLayerIds: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "05",
    name: "AI Robotics",
    subtitle: "Embodied Vision-Language-Action Robotics Control",
    slug: "ai-robotics",
    category: "Robotics & Embodied AI",
    description:
      "Zero-shot embodied intelligence pipeline combining real-time vision-language-action (VLA) models with local reactive collision avoidance for complex unstructured manipulation.",
    status: "PROTOTYPE",
    trl: "Indicative internal TRL assessment: TRL 4 (Laboratory Component Validation)",
    evidenceLevel: "PROTOTYPE",
    technologies: [
      "Embodied Vision-Language-Action (VLA)",
      "Real-time Octree Spatial Mapping",
      "Diffusion Policy Kinematics",
      "On-Device Transformer Inference"
    ],
    applications: [
      "Unstructured warehouse pick-and-place",
      "Service robotics task execution",
      "Agricultural selective harvesting",
      "Autonomous lab automation"
    ],
    targetIndustries: [
      "Logistics & Warehousing",
      "Industrial Automation",
      "Agricultural Robotics",
      "Consumer Service Robotics"
    ],
    commercialModels: [
      "Technology Licensing",
      "OEM Integration",
      "Joint Development"
    ],
    licensingPotential: "High - Software framework for robotic system integrators",
    nextMilestone: "On-chip TensorRT optimization for mobile robot platforms",
    demonstrator: "Virtual manipulation workspace simulation and action predictor",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Standard industrial robots require strict hard-coded trajectory programming and struggle in open-world environments with novel object geometries.",
    architectureDescription:
      "Dual-stream vision-language embedding encoder coupled with an adaptive spatial movement policy running locally at 30Hz loop rates.",
    potentialStrategicBuyers: [
      "Industrial Robot Manufacturers",
      "Fulfillment & Logistics Giant Techs",
      "Autonomous Mobile Robot (AMR) Vendors",
      "Commercial Service Drone Makers"
    ],
    architectureLayerIds: [1, 2, 3, 4, 6, 7]
  },
  {
    id: "06",
    name: "Machine Perception",
    subtitle: "Multi-Spectral Sensing & Event Camera Point Clouds",
    slug: "machine-perception",
    category: "Perception & Computer Vision",
    description:
      "Fusion engine processing asynchronous microsecond event-camera streams and multi-spectral infrared point clouds for reliable high-speed object detection in extreme lighting environments.",
    status: "PROTOTYPE",
    trl: "Indicative internal TRL assessment: TRL 3 (Analytical Proof of Concept)",
    evidenceLevel: "EXPERIMENTAL",
    technologies: [
      "Event Camera Asynchronous Signal Processing",
      "Multi-Spectral Point Cloud Fusion",
      "3D Sparse Dynamic Convolutions",
      "HDR Thermal-Visual Alignment"
    ],
    applications: [
      "High-speed autonomous vehicle vision",
      "Fog/smoke industrial inspection",
      "Night-vision perimeter defense",
      "High-speed sports trajectory tracking"
    ],
    targetIndustries: [
      "Automotive & Autonomous Mobility",
      "Defense & Surveillance",
      "Industrial Inspection",
      "Aerospace Systems"
    ],
    commercialModels: [
      "OEM Integration",
      "Technology Licensing",
      "Asset Acquisition"
    ],
    licensingPotential: "High - Perception stack IP for sensor and mobility companies",
    nextMilestone: "Live dual event-camera stereo calibration engine",
    demonstrator: "High-speed optical event camera synthetic point cloud viewer",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Conventional RGB frame cameras motion-blur at high speeds and fail under glare or zero-light conditions, limiting autonomous safety margins.",
    architectureDescription:
      "Asynchronous event tensor conversion module feeding a sparse 3D convolutional backbone with instant thermal fusion.",
    potentialStrategicBuyers: [
      "Automotive Tier-1 Suppliers",
      "Event Camera Sensor Vendors",
      "Defense Electro-Optical Manufacturers",
      "Drone Perception Developers"
    ],
    architectureLayerIds: [1, 2, 3, 7]
  },
  {
    id: "07",
    name: "Edge Intelligence",
    subtitle: "Sub-bit Quantized TinyML Microcontroller Engine",
    slug: "edge-intelligence",
    category: "Edge AI & Hardware Infrastructure",
    description:
      "Ultra-compact inference kernel executing binary and ternary quantized neural networks on standard ARM Cortex-M microcontrollers with sub-milliwatt power draw.",
    status: "DEMONSTRATOR",
    trl: "Indicative internal TRL assessment: TRL 4 (Demonstrated in Lab Benchmark Environment)",
    evidenceLevel: "DEMONSTRATED",
    technologies: [
      "1-Bit / 2-Bit Weight Quantization",
      "Cortex-M SIMD Bitwise Kernels",
      "Memory-Constrained Static Buffering",
      "Zero-Allocation TinyML Compiler"
    ],
    applications: [
      "Battery-powered acoustic fault monitors",
      "Wearable health anomaly trackers",
      "Smart agricultural soil probes",
      "Contactless smart meter intelligence"
    ],
    targetIndustries: [
      "Microcontrollers & Semiconductors",
      "IoT Hardware",
      "Industrial Predictive Maintenance",
      "Consumer Electronics"
    ],
    commercialModels: [
      "Compiler/Runtime IP License",
      "OEM Integration",
      "Asset Acquisition"
    ],
    licensingPotential: "Immediate - Standalone runtime library with minimal memory footprint",
    nextMilestone: "Integration into RISC-V open instruction architecture runtime",
    demonstrator: "Interactive micro-benchmark latency & memory simulator",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Deploying modern neural models to tiny microcontroller units ($1 chips) is severely bottlenecked by SRAM (SRAM < 256KB) and energy budgets.",
    architectureDescription:
      "Custom bitwise GEMM execution engine utilizing ARM Cortex-M DSP assembly instructions to bypass standard floating-point operations.",
    potentialStrategicBuyers: [
      "Semiconductor & MCU Vendors",
      "IoT Hardware Module Manufacturers",
      "Industrial Sensor Systems Providers",
      "Smart Utility Meter Suppliers"
    ],
    architectureLayerIds: [2, 3, 6]
  },
  {
    id: "08",
    name: "Immersive AI",
    subtitle: "Affective Spatial 3D Virtual World Rendering",
    slug: "immersive-ai",
    category: "Spatial Computing & Generative XR",
    description:
      "Real-time generative spatial graphics pipeline rendering reactive 3D volumetric environments that dynamically adapt geometry, lighting, and ambient audio based on user bio-affective input.",
    status: "RESEARCH",
    trl: "Indicative internal TRL assessment: TRL 2 (Technology Concept Formulated)",
    evidenceLevel: "RESEARCH",
    technologies: [
      "3D Gaussian Splatting Streamer",
      "Affective Biometric State Parser",
      "WebGPU Real-time Volumetric Shaders",
      "Procedural Dynamic Lighting Engine"
    ],
    applications: [
      "Bio-responsive spatial VR environments",
      "Immersive psychiatric exposure therapy",
      "Adaptive virtual reality training",
      "Next-generation digital twin visualization"
    ],
    targetIndustries: [
      "Spatial Computing / XR",
      "Digital Health & Mental Care",
      "Interactive Entertainment",
      "Enterprise Simulation"
    ],
    commercialModels: [
      "Joint Development",
      "Technology Licensing",
      "Asset Acquisition"
    ],
    licensingPotential: "Medium - Core spatial rendering algorithm & biometric mapping engine",
    nextMilestone: "WebGPU Gaussian Splatting dynamic mesh deformation benchmark",
    demonstrator: "Interactive bio-affective 3D spatial shader environment",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Current virtual reality environments are rigid and non-responsive to the user's emotional or stress state, resulting in static user experiences.",
    architectureDescription:
      "Real-time biometric feature ingestion driving procedural 3D visual parameters directly inside a WebGPU rendering pipeline.",
    potentialStrategicBuyers: [
      "XR Headset Platforms",
      "Spatial Engine Software Developers",
      "Medical VR Simulation Firms",
      "Digital Twin Platforms"
    ],
    architectureLayerIds: [1, 2, 3, 5]
  },
  {
    id: "09",
    name: "Neuro-Smart Home",
    subtitle: "Contactless Micro-Doppler Radar Smart Habitat OS",
    slug: "neuro-smart-home",
    category: "Contactless Sensing & Habitat OS",
    description:
      "Privacy-first spatial monitoring operating system using 60GHz millimeter-wave micro-Doppler radar to detect human presence, respiratory rates, fall events, and spatial posture without cameras.",
    status: "PROTOTYPE",
    trl: "Indicative internal TRL assessment: TRL 3 (Laboratory Analytical Model)",
    evidenceLevel: "EXPERIMENTAL",
    technologies: [
      "60GHz mmWave Micro-Doppler Radar",
      "Range-Doppler FFT Map Extraction",
      "Temporal Convolutional Motion Classifier",
      "Privacy-Safe Contactless Telemetry"
    ],
    applications: [
      "Elderly fall detection & respiration monitoring",
      "Camera-free smart home automation",
      "Hospital room occupant safety",
      "Automotive occupant presence detection"
    ],
    targetIndustries: [
      "Elderly Care & Healthtech",
      "Smart Building / Habitat OS",
      "Automotive Interiors",
      "Home Security Hardware"
    ],
    commercialModels: [
      "OEM Firmware License",
      "Joint Development",
      "Asset Acquisition"
    ],
    licensingPotential: "High - Radar signal processing firmware module for hardware vendors",
    nextMilestone: "Multi-target indoor spatial tracking array validation",
    demonstrator: "Micro-Doppler synthetic range-Doppler map & respiration monitor simulation",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Optical cameras in private home/hospital areas raise severe privacy concerns, while legacy PIR sensors lack granularity to detect subtle vitals or fall events.",
    architectureDescription:
      "Raw radar IQ signal stream -> Range-Doppler Matrix -> Temporal CNN classifier -> High-precision spatial intent event trigger.",
    potentialStrategicBuyers: [
      "Smart Building Ecosystem Providers",
      "Elderly Assistive Care Hardware Makers",
      "Automotive In-Cabin Safety Companies",
      "Consumer Electronics OEMs"
    ],
    architectureLayerIds: [1, 2, 3, 4, 6, 7]
  },
  {
    id: "10",
    name: "Assistive Intelligence",
    subtitle: "Intent-Predictive Adaptive Speech & Gaze AAC",
    slug: "assistive-intelligence",
    category: "Assistive Technology & Human Augmentation",
    description:
      "Context-aware Augmentative and Alternative Communication (AAC) platform predicting user communication intent via combined gaze vector tracking and micro-muscle bio-signals to reconstruct natural speech.",
    status: "DEMONSTRATOR",
    trl: "Indicative internal TRL assessment: TRL 4 (Lab Functional Prototype)",
    evidenceLevel: "DEMONSTRATED",
    technologies: [
      "Oculomotor Gaze Vector Estimation",
      "Contextual Transformer Intent Predictor",
      "Neural Speech Synthesizer",
      "Adaptive Bio-Signal Thresholding"
    ],
    applications: [
      "ALS & motor-neuron condition communication",
      "Post-stroke speech rehabilitation",
      "Hands-free silent speech interfaces",
      "Accessibility software integration"
    ],
    targetIndustries: [
      "Medical & Assistive Tech",
      "Rehabilitation Health Systems",
      "Accessibility Software OEMs",
      "Human Computer Interaction Labs"
    ],
    commercialModels: [
      "Technology Licensing",
      "B2B SDK / API License",
      "Asset Acquisition"
    ],
    licensingPotential: "Immediate - Modular AAC communication pipeline ready for integration",
    nextMilestone: "Personalized voice clone synthesis integration for dysarthric speech",
    demonstrator: "Interactive intent-predictive gaze communication AAC simulator",
    acquisitionAvailable: true,
    licensingAvailable: true,
    partnershipAvailable: true,
    problem:
      "Existing eye-gaze communication tools require tedious letter-by-letter selection, yielding extremely slow communication rates (< 10 words per minute).",
    architectureDescription:
      "Multimodal input layer combining micro-gaze vectors and context transformer modeling to offer 1-click complete predictive sentence synthesis.",
    potentialStrategicBuyers: [
      "Assistive Hardware & AAC Providers",
      "Medical Device Conglomerates",
      "Accessibility-focused Big Tech",
      "Neuro-rehabilitation Systems Providers"
    ],
    architectureLayerIds: [1, 2, 3, 4, 5]
  }
];
