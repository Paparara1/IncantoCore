export interface ExplorationAsset {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  status: 'Active R&D' | 'Proof of Concept' | 'Prototype' | 'Validation' | 'Integration Ready';
  trl: number; // 1 to 9
  hypothesis: string;
  problem: string;
  coreTechnology: string;
  technicalArchitecture: string[];
  technologyStack: string[];
  demonstratorType: 'neuromusic' | 'neurolight' | 'perception' | 'robotics' | 'edge' | 'generic';
  assetLayer: {
    trl: string;
    technologyStatus: string;
    coreTechnology: string;
    ipKnowHow: string;
    prototypeDemo: string;
    technologyStack: string[];
    applications: string[];
    targetIndustries: string[];
    commercialPotential: string;
    licensingPotential: string;
    strategicPartnershipPotential: string;
    nextMilestone: string;
  };
  roadmap: {
    explore: string;
    prototype: string;
    integrate: string;
    productize: string;
  };
  techMapLayers: Array<
    | 'Signals / Sensors'
    | 'Signal Processing'
    | 'AI / ML / Agents'
    | 'Intent / Interpretation'
    | 'Interaction'
    | 'IoT / Robotics / XR'
    | 'Experience / Physical World'
  >;
}

export const EXPLORATIONS: ExplorationAsset[] = [
  {
    slug: 'neuromusic',
    name: 'NeuroMusic',
    shortDescription: 'Generative real-time soundscapes driven by neural frequency band dynamics and synthetic EEG parameters.',
    category: 'Neural Systems & Audio Synthetics',
    status: 'Prototype',
    trl: 4,
    hypothesis: 'Neural oscillation shifts (Alpha/Beta/Theta) can directly parameterize generative audio synthesis and ambient RGB light spaces for real-time neuro-feedback states.',
    problem: 'Current mental state visualizers rely on post-hoc analytics rather than low-latency, immersive bio-feedback loops.',
    coreTechnology: 'Synthetic EEG telemetry processing, FFT spectral extraction, Web Audio API synthesis graph, dynamic RGB matrix mapping.',
    technicalArchitecture: [
      'Multi-channel simulated EEG signal generation (10-20 system format)',
      'Real-time bandpass filtering & FFT feature extraction (Alpha 8-12Hz, Beta 13-30Hz, Theta 4-8Hz)',
      'Algorithmic parameter mapper for audio oscillator frequency, gain, filter cutoff, and harmonic resonance',
      'RGB visual color spectrum mapping based on Focus Index and Relaxation Score ratios'
    ],
    technologyStack: ['Next.js', 'React', 'TypeScript', 'Web Audio API', 'HTML5 Canvas / WebGL', 'Tailwind CSS'],
    demonstratorType: 'neuromusic',
    assetLayer: {
      trl: 'TRL 4 - Component validation in laboratory/simulated environment',
      technologyStatus: 'Functional interactive prototype with synthetic EEG signal generator',
      coreTechnology: 'Real-time neural band feature extraction & parametric generative sound synthesis',
      ipKnowHow: 'Proprietary signal mapping matrices connecting neural spectral power density to polyphonic soundscapes',
      prototypeDemo: 'Live interactive Web Audio & RGB spectrum demonstrator',
      technologyStack: ['TypeScript', 'Web Audio API', 'React', 'Tailwind CSS', 'Canvas API'],
      applications: ['Focus enhancement tools', 'Adaptive biofeedback relaxation soundscapes', 'Interactive neuro-immersive exhibits'],
      targetIndustries: ['Digital Health & Therapeutics', 'Gaming & XR', 'Audio Technology', 'Wellness Tech'],
      commercialPotential: 'High - Software SDK licensing for wellness devices, mindfulness apps, and adaptive game audio engines.',
      licensingPotential: 'Non-exclusive SDK licensing for third-party audio software and hardware manufacturers.',
      strategicPartnershipPotential: 'Open to BCI hardware manufacturers (OpenBCI, Muse, Emotiv) and spatial audio developers.',
      nextMilestone: 'Physical BLE EEG headset (OpenBCI Cyton / Muse 2) live stream adapter integration.'
    },
    roadmap: {
      explore: 'Algorithm design for neural band extraction and Web Audio parameter mapping matrix.',
      prototype: 'Synthetic multi-channel EEG generator with interactive slider modulation and live Web Audio synthesis graph.',
      integrate: 'OpenBCI / Muse LSL (Lab Streaming Layer) WebSocket gateway integration for physical electrode hardware.',
      productize: 'Cross-platform native spatial audio plugin (VST3/AU/Unity) with biometric focus adjustment.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'AI / ML / Agents', 'Intent / Interpretation', 'Interaction', 'Experience / Physical World']
  },
  {
    slug: 'neuroai',
    name: 'NeuroAI',
    shortDescription: 'Brain-inspired spike-timing-dependent plasticity models combined with transformer architectures for hyper-efficient cognition.',
    category: 'Biomimetic Computing & AI',
    status: 'Active R&D',
    trl: 3,
    hypothesis: 'Event-driven spiking neural networks can reduce LLM inference power draw by 10x while maintaining temporal attention precision.',
    problem: 'Current dense deep neural networks require massive compute energy and lack event-based temporal adaptability.',
    coreTechnology: 'Spiking Neural Network (SNN) simulators, Neuromorphic spike encoding, Hybrid SNN-Transformer attention modules.',
    technicalArchitecture: [
      'Asynchronous Event-Based Encoder for continuous sensory streams',
      'Leaky Integrate-and-Fire (LIF) neural dynamic layer simulation',
      'Spike-Timing-Dependent Plasticity (STDP) unsupervised weight optimization',
      'Hybrid neuro-symbolic agent reasoning core'
    ],
    technologyStack: ['Python', 'PyTorch', 'SNNTorch', 'TypeScript', 'ONNX Runtime Web', 'React'],
    demonstratorType: 'generic',
    assetLayer: {
      trl: 'TRL 3 - Analytical & experimental proof-of-concept',
      technologyStatus: 'Active laboratory algorithm optimization and benchmark simulation',
      coreTechnology: 'Neuromorphic spike encoding & dynamic temporal attention networks',
      ipKnowHow: 'Low-latency event-driven spike conversion algorithms for stream processing',
      prototypeDemo: 'Interactive spike-train visualizer and energy consumption benchmark simulator',
      technologyStack: ['PyTorch', 'SNNTorch', 'ONNX Web', 'TypeScript'],
      applications: ['Ultra-low power edge AI', 'Neuromorphic sensory processing', 'Autonomous robotics control'],
      targetIndustries: ['Semiconductors', 'Aerospace & Defense', 'Edge Computing', 'Automotive'],
      commercialPotential: 'Extremely High - Next-generation compute acceleration for edge and wearable devices.',
      licensingPotential: 'IP licensing for chip designers and neuromorphic IP core integrators.',
      strategicPartnershipPotential: 'Seeking hardware co-design partnerships with fabless semiconductor ventures.',
      nextMilestone: 'Deploying benchmark models to physical Neuromorphic processors (Intel Loihi / SynSense).'
    },
    roadmap: {
      explore: 'Mathematical formulation of LIF spike dynamics and backpropagation through time approximations.',
      prototype: 'Web-based interactive spike train activity simulator comparing energy usage vs traditional ANN.',
      integrate: 'Neuromorphic hardware board connection (Spinniker / Loihi 2) via C++ bindings.',
      productize: 'Edge Neuromorphic AI SDK for microcontrollers and embedded vision chips.'
    },
    techMapLayers: ['Signal Processing', 'AI / ML / Agents', 'Intent / Interpretation']
  },
  {
    slug: 'neurolight',
    name: 'NeuroLight',
    shortDescription: 'Biometric light modulation synchronizing ambient photon dynamics with circadian and cognitive neural states.',
    category: 'Biometric Environment & Photobiology',
    status: 'Active R&D',
    trl: 3,
    hypothesis: 'Targeted flicker-frequency and spectrum-tuned light waves stimulate neural entrainment for enhanced alertness and circadian harmony.',
    problem: 'Static indoor lighting disrupts natural circadian rhythms and fails to adapt to real-time cognitive exhaustion.',
    coreTechnology: 'Dynamic spectral power distribution, Gamma-band entrainment pulse engine, Closed-loop biometric phototherapy.',
    technicalArchitecture: [
      'Cognitive state tracker evaluating alpha/beta power balance',
      'RGBW photonic spectral mixer generating precise Kelvin and lux output profiles',
      'Gamma-wave (40Hz) entrainment pulse generator',
      'IoT smart light controller bridge via Matter/Zigbee protocol'
    ],
    technologyStack: ['TypeScript', 'React', 'Canvas API', 'Node.js', 'Matter API', 'Tailwind CSS'],
    demonstratorType: 'neurolight',
    assetLayer: {
      trl: 'TRL 3 - Experimental photobiology prototype',
      technologyStatus: 'Functional photonic entrainment simulator and light spectrum generator',
      coreTechnology: 'Adaptive spectral modulation & 40Hz neuro-entrainment engine',
      ipKnowHow: 'Closed-loop photometric response curves linked to cognitive focus metrics',
      prototypeDemo: 'Interactive visual light spectrum tuner & pulse frequency simulator',
      technologyStack: ['TypeScript', 'Canvas API', 'Web Lighting Protocol', 'React'],
      applications: ['Circadian smart lighting', 'Focus enhancement workspaces', 'Neurodegenerative therapeutic support'],
      targetIndustries: ['Smart Building & Architecture', 'Healthcare & Wellness', 'Consumer Electronics'],
      commercialPotential: 'High - Consumer wellness products and corporate workspace productivity licensing.',
      licensingPotential: 'Patent-pending light frequency modulation algorithms licensed to fixture OEM manufacturers.',
      strategicPartnershipPotential: 'Collaborations with smart lighting manufacturers and sleep research institutes.',
      nextMilestone: 'Validation of 40Hz visual flicker entrainment via EEG spectral density shifts.'
    },
    roadmap: {
      explore: 'Research on 40Hz light stimulation effects on microglial activation and EEG entrainment.',
      prototype: 'Interactive spectrum engine manipulating color temperature and pulse frequency on web display.',
      integrate: 'Hardware bridge connecting web controller to physical Philips Hue / DALI lighting controllers.',
      productize: 'Commercial enterprise architecture lighting controller module.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'Interaction', 'IoT / Robotics / XR', 'Experience / Physical World']
  },
  {
    slug: 'brain-to-world',
    name: 'Brain-to-World',
    shortDescription: 'Direct neural intent decoding for high-throughput spatial computing and physical device manipulation.',
    category: 'Brain-Computer Interfaces & Teleoperation',
    status: 'Proof of Concept',
    trl: 3,
    hypothesis: 'Motor imagery and visual evoked potentials (SSVEP) can enable sub-100ms spatial intent selection without physical movement.',
    problem: 'Touch and voice interfaces are slow, context-unaware, and inaccessible for individuals with mobility impairments.',
    coreTechnology: 'SSVEP signal classifier, Motor Imagery spatial pattern analysis, Neural Intent Translation Protocol.',
    technicalArchitecture: [
      'High-rate SSVEP frequency visual stimulus target matrix',
      'Common Spatial Pattern (CSP) signal filtering module',
      'Real-time Support Vector / LDA Classifier for intent determination',
      'Spatial command dispatcher to virtual / physical effectors'
    ],
    technologyStack: ['Python', 'WebSockets', 'TypeScript', 'Three.js', 'React', 'Tailwind CSS'],
    demonstratorType: 'generic',
    assetLayer: {
      trl: 'TRL 3 - Proof-of-concept laboratory demonstrator',
      technologyStatus: 'Simulated neural intent selection and target tracking interface',
      coreTechnology: 'SSVEP & Motor Imagery classification engine',
      ipKnowHow: 'Adaptive spatial pattern filtering for noisy non-invasive EEG signals',
      prototypeDemo: 'Interactive target lock & neural intent control simulator',
      technologyStack: ['TypeScript', 'Three.js', 'WebSockets', 'React'],
      applications: ['Hands-free XR navigation', 'Assistive robotic control', 'Industrial telepresence'],
      targetIndustries: ['Medical Assistive Devices', 'XR & Gaming', 'Industrial Robotics'],
      commercialPotential: 'High - Core control layer for future spatial computing and assistive medical equipment.',
      licensingPotential: 'SDK licensing for spatial computing headsets (Apple Vision Pro, Meta Quest, HTC).',
      strategicPartnershipPotential: 'Seeking joint development with neurotech device labs and rehabilitation robotics firms.',
      nextMilestone: 'Integration with 8-channel non-invasive EEG headset for physical target selection tests.'
    },
    roadmap: {
      explore: 'Algorithm research on SSVEP signal-to-noise ratio maximization in unshielded environments.',
      prototype: 'Simulated neural target selector with SSVEP frequency flickering interface on WebGL.',
      integrate: 'WebSocket EEG stream feed connector for physical command dispatching to smart home / XR.',
      productize: 'Universal Neural Input Method Editor (IME) plugin for spatial computing platforms.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'AI / ML / Agents', 'Intent / Interpretation', 'Interaction', 'IoT / Robotics / XR']
  },
  {
    slug: 'ai-robotics',
    name: 'AI Robotics',
    shortDescription: 'Autonomous embodiment engines combining vision-language-action models with physical feedback loops.',
    category: 'Embodied AI & Robotics',
    status: 'Prototype',
    trl: 4,
    hypothesis: 'Unified Vision-Language-Action (VLA) models enable zero-shot generalization for robotic manipulation tasks.',
    problem: 'Traditional industrial robotics require explicit, brittle scripting for every novel manipulation task.',
    coreTechnology: 'Vision-Language-Action Transformers, Impedance Control, Physics-informed real-time trajectory planners.',
    technicalArchitecture: [
      'Multi-modal Camera Input Stream Processing Engine',
      'VLA Transformer predicting 7-DOF spatial end-effector actions',
      'Closed-Loop Force/Torque Haptic Feedback Controller',
      'ROS2 / Isaac Sim Integration Layer'
    ],
    technologyStack: ['Python', 'PyTorch', 'ROS2', 'TypeScript', 'Three.js', 'React'],
    demonstratorType: 'robotics',
    assetLayer: {
      trl: 'TRL 4 - Component validation in simulated robotics physics engine',
      technologyStatus: 'Interactive 3D arm kinematic simulation and action planner demo',
      coreTechnology: 'Multi-modal Vision-Language-Action policy neural inference',
      ipKnowHow: 'Real-time haptic compliance adjustment during zero-shot object manipulation',
      prototypeDemo: 'Interactive 3D robotic arm inverse kinematics and intent execution loop',
      technologyStack: ['TypeScript', 'Three.js', 'React', 'Python', 'ROS2'],
      applications: ['Flexible warehouse logistics', 'Precision surgical assistance', 'Hazardous environment teleoperation'],
      targetIndustries: ['Logistics', 'Manufacturing', 'Healthcare Robotics', 'Defense'],
      commercialPotential: 'Massive - Transformation of universal automation capabilities across manufacturing.',
      licensingPotential: 'Autonomous movement policy models licensed to robot arm OEMs.',
      strategicPartnershipPotential: 'Partnership with robotic hardware manufacturers and industrial automation integrators.',
      nextMilestone: 'Physical deployment on 6-DOF robotic manipulator arm via ROS2 bridge.'
    },
    roadmap: {
      explore: 'Training Transformer policies on cross-embodiment demonstration datasets.',
      prototype: 'Interactive WebGL 3D robot arm simulator with trajectory planning and task execution controls.',
      integrate: 'ROS2 driver connection with real physical robotic arm (Universal Robots / Franka Emika).',
      productize: 'Plug-and-play autonomous task policy appliance for manufacturing assembly lines.'
    },
    techMapLayers: ['Signals / Sensors', 'AI / ML / Agents', 'Intent / Interpretation', 'Interaction', 'IoT / Robotics / XR', 'Experience / Physical World']
  },
  {
    slug: 'machine-perception',
    name: 'Machine Perception',
    shortDescription: 'Multi-spectral spatial awareness fusing LIDAR, event cameras, and thermal vision for deep environmental understanding.',
    category: 'Computer Vision & Multi-Spectral Sensing',
    status: 'Active R&D',
    trl: 3,
    hypothesis: 'Sensor fusion across event-based, thermal, and depth channels provides all-weather 3D spatial reconstruction with microsecond latency.',
    problem: 'Standard RGB vision fails in high dynamic range lighting, fog, darkness, and high-speed moving object scenes.',
    coreTechnology: 'Multi-sensor temporal registration, Asynchronous event point cloud fusion, Neural Radiance Field (NeRF) spatial reconstruction.',
    technicalArchitecture: [
      'Asynchronous Event Camera stream processing pipeline',
      'Thermal-Infrared and Depth LIDAR point cloud alignment engine',
      'Real-time Occupancy Grid prediction neural network',
      'Spatial semantic segmentation map renderer'
    ],
    technologyStack: ['C++', 'CUDA', 'Python', 'TypeScript', 'Three.js / WebGL', 'React'],
    demonstratorType: 'perception',
    assetLayer: {
      trl: 'TRL 3 - Experimental laboratory multi-sensor pipeline',
      technologyStatus: 'Web-based point cloud and multi-spectral sensor fusion simulator',
      coreTechnology: 'Asynchronous event-driven spatial point cloud fusion',
      ipKnowHow: 'Ultra-fast registration algorithms combining sparse event spikes with dense LIDAR frames',
      prototypeDemo: 'Interactive multi-layer perception viewer (RGB, Depth, Thermal, Event overlay)',
      technologyStack: ['TypeScript', 'Three.js', 'WebGL', 'React'],
      applications: ['Autonomous driving in extreme weather', 'Search and rescue drone perception', 'Industrial security surveillance'],
      targetIndustries: ['Automotive', 'Aerospace', 'Security & Surveillance', 'Robotics'],
      commercialPotential: 'High - Essential sensing layer for autonomous vehicles, drones, and smart infrastructure.',
      licensingPotential: 'Software sensor-fusion engine available for automotive Tier 1 suppliers.',
      strategicPartnershipPotential: 'Joint testing with event camera manufacturers (Prophesee) and LIDAR vendors.',
      nextMilestone: 'Hardware test bench integrating event camera and thermal module in outdoor trials.'
    },
    roadmap: {
      explore: 'Algorithm optimization for high-speed point cloud alignment under microsecond noise constraints.',
      prototype: 'Interactive multi-spectral camera stream viewer simulating night vision and event spike triggers.',
      integrate: 'Physical FPGA edge sensor module capturing live event-camera stream.',
      productize: 'Commercial multi-sensor fusion chip firmware for automotive safety systems.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'AI / ML / Agents', 'Intent / Interpretation']
  },
  {
    slug: 'edge-intelligence',
    name: 'Edge Intelligence',
    shortDescription: 'Ultra-compact quantized neural execution frameworks operating on milliwatt microcontrollers without cloud dependency.',
    category: 'Edge Computing & Embedded AI',
    status: 'Prototype',
    trl: 5,
    hypothesis: 'Sub-bit quantization and sparse memory execution allow 100M+ parameter models to run locally on $5 edge silicon.',
    problem: 'Cloud AI latency, bandwidth costs, and privacy vulnerabilities prevent real-time offline intelligent actuation.',
    coreTechnology: 'Ternary/Binary Weight Quantization, Dynamic Operator Pruning, Embedded C++ Inference Engine.',
    technicalArchitecture: [
      'INT4 / Binary Neural Network (BNN) Quantization Compiler',
      'Zero-copy memory pool allocation manager for microcontrollers',
      'Sub-millisecond keyword and anomaly detection engine',
      'Local encrypted model weight store'
    ],
    technologyStack: ['C++', 'WebAssembly', 'TensorFlow Lite Micro', 'TypeScript', 'React'],
    demonstratorType: 'edge',
    assetLayer: {
      trl: 'TRL 5 - Embedded engine validated in relevant simulated hardware environment',
      technologyStatus: 'In-browser WebAssembly edge inference benchmark demonstrator',
      coreTechnology: 'Ultra-low bitwidth quantization compiler & sparse execution runtime',
      ipKnowHow: 'Memory-constrained SRAM layout optimization for zero-delay microcontroller inference',
      prototypeDemo: 'Live in-browser WebAssembly edge model benchmark (Inference speed & memory metrics)',
      technologyStack: ['WebAssembly', 'C++', 'TypeScript', 'React', 'Tailwind CSS'],
      applications: ['Offline voice intent recognition', 'Industrial vibration anomaly monitoring', 'Medical wearable alert monitors'],
      targetIndustries: ['IoT', 'Industrial Automation', 'Medical Wearables', 'Consumer Electronics'],
      commercialPotential: 'High - Scalable across billions of embedded IoT devices requiring local intelligence.',
      licensingPotential: 'Runtime engine and compiler toolchain licensed to microcontroller chipmakers.',
      strategicPartnershipPotential: 'Collaborations with STMicroelectronics, Nordic Semiconductor, and NXP.',
      nextMilestone: 'Deployment on ARM Cortex-M55 microcontroller hardware evaluation board.'
    },
    roadmap: {
      explore: 'Development of sub-bit quantization mathematical loss formulation.',
      prototype: 'In-browser WebAssembly runtime demo showing real-time inference on client CPU without servers.',
      integrate: 'Flashing firmware image to physical ESP32 / Cortex-M4 microcontroller board.',
      productize: 'Enterprise TinyML optimization compiler pipeline.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'AI / ML / Agents', 'IoT / Robotics / XR']
  },
  {
    slug: 'immersive-ai',
    name: 'Immersive AI',
    shortDescription: 'Spatial generative virtuality synthesizers dynamically shaping 3D environments according to user emotional and cognitive dynamics.',
    category: 'Spatial Computing & Generative Virtual Worlds',
    status: 'Proof of Concept',
    trl: 3,
    hypothesis: 'Biometrics-driven neural Gaussian Splatting enables real-time dynamic re-rendering of virtual reality environments matching mental states.',
    problem: 'Virtual reality worlds are static, pre-rendered models that cannot react adaptively to human neuro-affective states.',
    coreTechnology: 'Real-time Gaussian Splatting re-lighting, Affective computing emotion classifier, Procedural spatial audio generator.',
    technicalArchitecture: [
      'Biometric Affect Engine evaluating arousal and valence scores',
      'Dynamic 3D Gaussian Splat scene lighting & color palette interpolator',
      'Procedural spatial geometry generation pipeline',
      'XR Headset telemetry pipeline'
    ],
    technologyStack: ['Three.js', 'WebGPU', 'TypeScript', 'React', 'Tailwind CSS'],
    demonstratorType: 'generic',
    assetLayer: {
      trl: 'TRL 3 - Lab scale interactive spatial environment prototype',
      technologyStatus: 'Interactive WebGPU spatial scene rendering driven by affective sliders',
      coreTechnology: 'Real-time affective computing spatial re-rendering pipeline',
      ipKnowHow: 'Seamless multi-sensory color and sound shift matrices driven by biometric valence/arousal',
      prototypeDemo: 'Interactive 3D WebGPU dynamic world lighting & mood spectrum renderer',
      technologyStack: ['WebGPU', 'Three.js', 'TypeScript', 'React'],
      applications: ['Therapeutic VR relaxation rooms', 'Adaptive immersive gaming', 'Virtual spatial presence exhibits'],
      targetIndustries: ['XR & Gaming', 'Digital Therapeutics', 'Entertainment & Culture'],
      commercialPotential: 'High - Key engine component for next-gen adaptive spatial VR/AR experiences.',
      licensingPotential: 'Unity & Unreal Engine plugin SDK licensing.',
      strategicPartnershipPotential: 'Seeking collaboration with XR headset makers and digital mental health VR developers.',
      nextMilestone: 'WebXR integration with Meta Quest 3 biometric headband attachment.'
    },
    roadmap: {
      explore: 'Research on affective visual color and geometry shifts for rapid anxiety reduction.',
      prototype: 'WebGPU dynamic 3D environment rendered in browser with real-time mood controls.',
      integrate: 'WebXR API connection for direct immersive headset deployment.',
      productize: 'Commercial XR Adaptive Environment SDK.'
    },
    techMapLayers: ['Signals / Sensors', 'AI / ML / Agents', 'Interaction', 'IoT / Robotics / XR', 'Experience / Physical World']
  },
  {
    slug: 'neuro-smart-home',
    name: 'Neuro-Smart Home',
    shortDescription: 'Context-aware habitat operating systems anticipating biological and cognitive needs through passive multi-modal environmental feedback.',
    category: 'Ambient Intelligence & Smart Environments',
    status: 'Active R&D',
    trl: 3,
    hypothesis: 'Passive biometric sensing (radar micro-doppler, optical pulse, environmental audio) enables hands-free smart home adaptation without manual command.',
    problem: 'Current smart homes require explicit voice commands or rigid manual scheduling rules.',
    coreTechnology: '60GHz mmWave Radar micro-Doppler breathing/heart rate extraction, Ambient intent prediction agent, Matter protocol orchestration.',
    technicalArchitecture: [
      'mmWave Radar signal processor extracting contactless respiration rate',
      'Multi-room context awareness state graph engine',
      'Ruleless Neural Intent Orchestrator predicting desired room temperature & light',
      'Matter / Home Assistant protocol integration adapter'
    ],
    technologyStack: ['TypeScript', 'Node.js', 'React', 'Tailwind CSS', 'Matter API'],
    demonstratorType: 'generic',
    assetLayer: {
      trl: 'TRL 3 - Simulated ambient smart habitat control hub',
      technologyStatus: 'Web-based interactive smart room state controller and radar signal simulator',
      coreTechnology: 'Contactless mmWave radar biometric sensing & agentic habitat control',
      ipKnowHow: 'Predictive neural state engine optimizing energy efficiency and human comfort simultaneously',
      prototypeDemo: 'Interactive smart floorplan simulator with contactless biometric radar feedback',
      technologyStack: ['TypeScript', 'React', 'Tailwind CSS', 'Canvas API'],
      applications: ['Elderly wellness monitoring', 'Automated energy-efficient luxury homes', 'Sleep quality optimization rooms'],
      targetIndustries: ['Smart Home & IoT', 'Elderly Care & Assistive Tech', 'Real Estate Development'],
      commercialPotential: 'High - High market demand in premium residential and healthcare facility automation.',
      licensingPotential: 'Habitat orchestration middleware licensed to smart home ecosystem platforms.',
      strategicPartnershipPotential: 'Partnership with real estate developers, Home Assistant ecosystem, and Matter device makers.',
      nextMilestone: 'Physical 60GHz mmWave radar sensor integration via MQTT broker.'
    },
    roadmap: {
      explore: 'Algorithm testing for contactless pulse rate extraction from 60GHz radar reflections.',
      prototype: 'Interactive floorplan simulator controlling simulated thermostat, lighting, and audio based on biometric states.',
      integrate: 'Home Assistant MQTT bridge driving physical smart switches and HVAC units.',
      productize: 'INCANTO Habitat OS hardware hub and app ecosystem.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'AI / ML / Agents', 'Intent / Interpretation', 'Interaction', 'IoT / Robotics / XR', 'Experience / Physical World']
  },
  {
    slug: 'assistive-intelligence',
    name: 'Assistive Intelligence',
    shortDescription: 'Adaptive cognitive augmentation tools restoring and empowering sensory, motor, and speech capabilities through empathetic agentic systems.',
    category: 'Assistive Technology & Augmentation',
    status: 'Prototype',
    trl: 4,
    hypothesis: 'Multi-modal low-latency intent prediction enables natural eye-tracking and neural-assisted speech synthesis for individuals with ALS or stroke recovery.',
    problem: 'Legacy assistive augmentative communication (AAC) devices are slow, cumbersome, and sound robotic.',
    coreTechnology: 'Neural voice cloning with emotional prosody, Predictive AAC text generator, Gaze-vector intention estimator.',
    technicalArchitecture: [
      'High-speed Web Cam Eye Gaze Vector tracking engine',
      'Context-aware LLM predicting full intent from key gaze selections',
      'Zero-shot biometric speech synthesizer with neural tone modulation',
      'Feedback tactile/haptic interface'
    ],
    technologyStack: ['TypeScript', 'React', 'Web Audio API', 'TensorFlow.js', 'Tailwind CSS'],
    demonstratorType: 'generic',
    assetLayer: {
      trl: 'TRL 4 - Lab tested speech and gaze assistive prototype',
      technologyStatus: 'Interactive gaze-simulated expressive AAC communicator demo',
      coreTechnology: 'Intent-predictive AAC engine with empathetic neural speech synthesis',
      ipKnowHow: 'Ultra-sparse intent input to natural conversational phrase generation algorithms',
      prototypeDemo: 'Interactive AAC communicator with instant neural phrase expansion and audio playback',
      technologyStack: ['TypeScript', 'React', 'Web Audio API', 'Tailwind CSS'],
      applications: ['Neurological rehabilitation AAC devices', 'ALS & Stroke patient communication', 'Hands-free accessibility'],
      targetIndustries: ['Medical Devices', 'Healthcare & Rehabilitation', 'Accessibility Tech'],
      commercialPotential: 'High - Life-changing technology with strong reimbursement and institutional healthcare adoption.',
      licensingPotential: 'Assistive software suite licensed to medical AAC device manufacturers.',
      strategicPartnershipPotential: 'Seeking clinical trials with rehabilitation clinics and neuro-disability foundations.',
      nextMilestone: 'Clinical user testing with ALS patient advocate groups.'
    },
    roadmap: {
      explore: 'Testing gaze velocity thresholds for minimal fatigue intent selection.',
      prototype: 'Interactive browser AAC interface expanding single taps/gaze movements into full natural spoken sentences.',
      integrate: 'Tobii Eye Tracker hardware SDK bridge integration.',
      productize: 'FDA medical-grade assistive communication tablet application.'
    },
    techMapLayers: ['Signals / Sensors', 'Signal Processing', 'AI / ML / Agents', 'Intent / Interpretation', 'Interaction', 'Experience / Physical World']
  }
];

export function getExplorationBySlug(slug: string): ExplorationAsset | undefined {
  return EXPLORATIONS.find((exp) => exp.slug === slug);
}
