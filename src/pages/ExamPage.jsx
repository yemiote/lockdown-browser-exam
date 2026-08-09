import { useState, useEffect } from "react";
import "../styles/ExamPage.css";

const questions = [
  {
    id: 1,
    question:
      "You are working in the Emergency Department (ED). A client is brought in by ambulance status post motor vehicle accident (MVA) and reports neck weakness and pain, imaging is negative for any specific fractures. Which intervention is MOST appropriate at this time?",
    options: [
      "Begin active range-of-motion exercises for the cervical spine",
      "Maintain cervical precautions and avoid unnecessary neck movement",
      "Apply deep tissue massage to the cervical muscles",
      "Begin resisted strengthening of the neck muscles",
    ],
  },

  {
    id: 2,
    question:
      "A 67-year-old client comes to the outpatient clinic with a diagnosis of hand pain, limited AROM of the MCP/PIP/DIP joints, and weakness impacting their ability to feed themselves. Which device is BEST?",
    options: [
      "Universal cuff",
      "Long-handled sponge",
      "Standard transfer board",
      "Gait belt",
    ],
  },

  {
    id: 3,
    question:
      "You are working with an 89-year-old patient status post CVA on self-feeding. You have already recommended a universal cuff and visual scanning techniques for maximizing her independence, but have noted dysarthria in the past two sessions. You decide to recommend further evaluation and referral. Who is the MOST appropriate IDT member to request a referral from?",
    options: [
      "Physical therapist",
      "Speech-language pathologist",
      "Social worker",
      "Recreational therapist",
    ],
  },

  {
    id: 4,
    question:
      "During an in-home evaluation, you observe your client with Huntington’s disease to be unsafe preparing meals because of chorea. Which intervention is BEST?",
    options: [
      "Encourage the client to prepare meals as quickly as possible",
      "Recommend weighted or stabilizing kitchen utensils and adaptive equipment",
      "Eliminate all meal preparation activities from the client’s routine",
      "Have the client perform repetitive strengthening exercises before cooking",
    ],
  },

  {
    id: 5,
    question:
      "An OT is evaluating a new T-12 incomplete SCI patient who verbalizes that she enjoys cooking for her husband, and one of her goals is to resume independence with this task. What should the OT do FIRST?",
    options: [
      "Provide adaptive kitchen equipment immediately",
      "Determine the client’s current abilities and limitations during the cooking task",
      "Recommend that the client’s husband complete all cooking activities",
      "Begin upper-extremity strengthening exercises",
    ],
  },

  {
    id: 6,
    question:
      "You are working with a client who has progressing MS, who is unable to safely ambulate, and you have recommended a wheelchair for all functional mobility. The patient has been using the wheelchair successfully, but now comes to you with complaints of upper extremity pain while propulsing the wheelchair. What is the FIRST thing you should do?",
    options: [
      "Recommend that the client stop using the wheelchair permanently",
      "Evaluate the wheelchair fit, positioning, and propulsion mechanics",
      "Begin aggressive upper-extremity strengthening",
      "Recommend a power wheelchair without further assessment",
    ],
  },

  {
    id: 7,
    question:
      "A client recently experienced a stroke that affected their left side with consequent neglect. Sit to stand and functional mobility attempts are unsafe to attempt without assistance. What is the MOST APPROPRIATE technique for the OTR to address in order to promote safe functional mobility?",
    options: [
      "Visual scanning and attention to the neglected side",
      "Avoiding use of the affected side",
      "Increasing the speed of functional mobility",
      "Performing all mobility tasks with the client seated",
    ],
  },

  {
    id: 8,
    question:
      "An elderly client was recently discharged after having a right MCA stroke. At a home follow-up appointment, the OTR reviews medication management. The OTR plays a supportive role to the physician and nursing staff by doing WHICH of the following?",
    options: [
      "Changing the client’s medication dosage",
      "Prescribing a new medication",
      "Identifying medication-management difficulties and communicating concerns to the appropriate team members",
      "Discontinuing medications that appear unnecessary",
    ],
  },

  {
    id: 9,
    question:
      "An occupational therapist is working with a client who has experienced a stroke and exhibits left hemiplegia. They are providing education on bed mobility. The occupational therapy practitioner recognizes compensatory strategies by the client when rolling to the right side to include excessive extension of the head, neck, and back to initiate the rolling movement. What is the MOST APPROPRIATE technique for the OTP to incorporate to avoid the client’s use of an extensor pattern?",
    options: [
      "Encourage the client to extend the head and neck further",
      "Facilitate flexion of the head, neck, and trunk during rolling",
      "Have the client roll only toward the affected side",
      "Prevent the client from using their upper extremities during rolling",
    ],
  },

  {
    id: 10,
    question:
      "You are working with a client with a past medical history of type 2 diabetes, end-stage renal disease, peripheral vascular disease, and fibromyalgia. The client has been admitted to the hospital with multiple falls and complaints of numbness and tingling in their feet. The OTP suspects that the client is experiencing which of the following?",
    options: [
      "Peripheral neuropathy",
      "Cerebral edema",
      "Spasticity",
      "Vestibular dysfunction",
    ],
  },

  {
    id: 11,
    question:
      "An adult client with quadriplegic cerebral palsy is seeking services to address home-management solutions after moving into a new house. The client currently lives alone, uses a wheelchair for all functional mobility, is intact mentally/cognitively, has impaired tone and motor control in all extremities, and flexion contractures in both hands. The client is looking for suggestions for home adaptations and recommendations for environmental controls, as they are unable to reach the thermostat in their home and thus unable to control their home temperature. What recommendation is BEST for the client to access their thermostat?",
    options: [
      "Install a remote or voice-controlled environmental control system",
      "Require the client to stand and reach the thermostat",
      "Move the wheelchair farther away from the thermostat",
      "Recommend removing the home’s thermostat",
    ],
  },

  {
    id: 12,
    question:
      "An OTR is completing an intervention session with a client who experienced a traumatic brain injury as a result of a boating accident. During the sink-level grooming portion of the evaluation, the client demonstrated difficulty completing the task; required verbal cues and hand-over-hand technique to reach, grab and manipulate all grooming items. The client felt that the sink activity went well and looks forward to working on this again with the OT. Which statement would BEST reflect the assessment section of the documentation?",
    options: [
      "Client completed grooming independently and without difficulty",
      "Client demonstrated difficulty completing grooming tasks and required verbal cues and hand-over-hand assistance",
      "Client refused to participate in grooming activities",
      "Client demonstrated no deficits during the grooming task",
    ],
  },

  {
    id: 13,
    question:
      "A client is referred to OT with a diagnosis of ataxia after sustaining a recent TBI. What should the OTR anticipate assessing when they meet with the client for the initial evaluation?",
    options: [
      "Coordination, balance, and functional motor control",
      "Only the client’s visual acuity",
      "Only the client’s cardiovascular endurance",
      "Only the client’s ability to perform passive range of motion",
    ],
  },

  {
    id: 14,
    question:
      "A client was referred to OT for evaluation and intervention regarding his multiple sclerosis diagnosis. The OT has gathered home and PLOF information and created an intervention focusing on identified deficits including activity tolerance and fatigue management, decreased strength, and home management as the client is the primary caretaker of his home. During one of the sessions, the client reports new loss of sensation to his face, temple, mouth, and teeth. Based on his clinical presentation, which of the following is most likely affected?",
    options: [
      "Trigeminal nerve",
      "Optic nerve",
      "Facial nerve",
      "Vagus nerve",
    ],
  },

  {
    id: 15,
    question:
      "You are working with a client who was referred to OT after sustaining a stroke with left-sided residual deficits and bit temporal hemianopsia. Based on your evaluation you determine that the left-sided residual deficits are still functional, albeit the client reports frustration that they cannot use this extremity as easily as before their stroke, however the bitemporal hemianopsia will be included in your intervention plan. Which of the following is the most appropriate strategy to suggest to your client for maximizing their independence?",
    options: [
      "Visual scanning training",
      "Avoiding all visually demanding activities",
      "Keeping both eyes closed during mobility",
      "Wearing an eye patch at all times",
    ],
  },

  {
    id: 16,
    question:
      "An OT is providing intervention to a client with left hemiplegia in a long-term care setting, who primarily relies on a manual wheelchair for functional mobility. The client is able to safely complete a bed<>chair and chair<>toilet transfer with minimal assistance. Nursing staff have reported that recently the client has been experiencing increased falls from their wheelchair. Which of the following is most likely adding to increased falls?",
    options: [
      "Improper wheelchair positioning or setup",
      "Increased independence with transfers",
      "Improved sitting balance",
      "Increased use of the unaffected upper extremity",
    ],
  },

  {
    id: 17,
    question:
      "An OTR has been providing ADL training to a 25-year-old client who recently sustained a T7 SCI. She has verbalized that being able to have her own underwear is important to her. Which is the best strategy for teaching lower body dressing for this client?",
    options: [
      "Have the client dress the lower body while standing without assistance",
      "Teach lower-body dressing using a safe seated or long-sitting technique and adaptive strategies as needed",
      "Have the caregiver complete all lower-body dressing",
      "Avoid lower-body dressing training until the client can walk independently",
    ],
  },

  {
    id: 18,
    question:
      "An OT is completing an initial evaluation for a client who has recently sustained a right carpal tunnel injury, now status post carpal tunnel repair; they have not been out of bed since surgery. The client uses both hands to push from the chair to stand, and then immediately reports pain, dizziness, and feeling lightheaded. What should the OT do next?",
    options: [
      "Continue the transfer to improve endurance",
      "Stop the activity and assess the client’s vital signs and symptoms",
      "Immediately begin strengthening exercises",
      "Ask the client to walk independently",
    ],
  },

  {
    id: 19,
    question:
      "Which of the following is the most accurate representation of an upper extremity D2-flexion pattern?",
    options: [
      "Shoulder flexion, abduction, external rotation with forearm supination",
      "Shoulder extension, adduction, internal rotation with forearm pronation",
      "Shoulder flexion, adduction, internal rotation with forearm pronation",
      "Shoulder extension, abduction, external rotation with forearm supination",
    ],
  },

  {
    id: 20,
    question:
      "An OT is providing commode transfer training, using a slideboard, to a client with a new C6 SCI. What is the best instruction for transfer strategy?",
    options: [
      "Lock the wheelchair brakes, position the slideboard appropriately, and use a safe weight-shifting technique during the transfer",
      "Keep the wheelchair brakes unlocked to allow easier movement",
      "Stand fully before moving onto the commode",
      "Have the client complete the transfer without using the slideboard",
    ],
  },

  {
    id: 21,
    question:
      "An OT is working on self-feeding with a client with Parkinson’s disease, who experiences significant intention tremors that impact their ability to feed themselves. Which is the most appropriate adaptive utensil recommendation to inhibit tremors?",
    options: [
      "Weighted utensil",
      "Standard plastic spoon",
      "Extra-long handled spoon",
      "Disposable fork",
    ],
  },

  {
    id: 22,
    question:
      "Your client has been referred to you for outpatient occupational therapy services. After reviewing their chart you determine they have a current diagnosis of breast cancer, with a past medical history of fibromyalgia, mild cognitive impairment, hypotension, and migraines. You are gathering information during your initial evaluation and want to prioritize the client’s goals for therapy, perceived performance tasks identified, and satisfaction of performance for these tasks. Which is the best assessment tool to gather this information?",
    options: [
      "Canadian Occupational Performance Measure (COPM)",
      "Mini-Mental State Examination (MMSE)",
      "Berg Balance Scale",
      "Manual Muscle Testing (MMT)",
    ],
  },

  {
    id: 23,
    question:
      "An OT receives a referral for evaluation of feeding for a client in a skilled nursing facility with an ALS diagnosis. While observing the patient dysphagia is noted. Which finding most likely was noticed that indicated dysphagia?",
    options: [
      "Coughing or choking during meals",
      "Increased appetite during meals",
      "Improved chewing speed",
      "Increased ability to swallow large amounts of food",
    ],
  },

  {
    id: 24,
    question:
      "An OTR is working with a client who has recently sustained a stroke with residual expressive aphasia deficits. The OT and SLP have collaborated and determined that recommending use of assistive technology (AT), such as an electronic communication board, is appropriate for this client. While working with the client, they inquire as to what AT means. The best response for the OT to give would be:",
    options: [
      "Technology designed to help a person perform activities or communicate more independently",
      "Technology used only to replace lost vision",
      "Equipment used exclusively for physical exercise",
      "Technology that is only available in a hospital setting",
    ],
  },

  {
    id: 25,
    question:
      "An OTR is providing upper body dressing interventions for a client with Duchenne muscular dystrophy. The OTR notices that the client is demonstrating difficulty with and requiring increased assistance with managing the buttons of their shirts. What would be the most appropriate intervention the OT could recommend?",
    options: [
      "Use shirts with larger buttons or alternative fasteners",
      "Require the client to use smaller buttons for practice",
      "Eliminate upper-body dressing from the treatment plan",
      "Have the client complete all dressing tasks while standing",
    ],
  },

  {
    id: 26,
    question:
      "David is a 56 year old male with a diagnosis of ALS. He lives alone in his own home where he was independent with all ADL/IADLs six months ago. David is concerned about his declining independence in ADL/IADLs and is looking for a rehabilitation team to evaluate his ability to remain in his home independently for as long as possible. David is currently not driving as he feels unsafe when he is on the road as the driver. He is going to work with a peer driving him. Which setting is most appropriate to evaluate David at this time?",
    options: [
      "Home environment",
      "Inpatient surgical unit",
      "School-based setting",
      "Hospital emergency department",
    ],
  },

  {
    id: 27,
    question:
      "Which of the following is not acceptable practice in OT documentation?",
    options: [
      "Documenting objective observations and measurable findings",
      "Recording interventions provided during the session",
      "Including inaccurate or unsupported information in the client’s record",
      "Documenting the client’s response to intervention",
    ],
  },

  {
    id: 28,
    question:
      "When working with a patient on airborne precautions (i.e. TB or Covid-19), which of the following infection control practices will you utilize?",
    options: [
      "Appropriate respiratory protection and required airborne precautions",
      "No personal protective equipment is necessary",
      "Only gloves are required",
      "Standard precautions can always replace airborne precautions",
    ],
  },

  {
    id: 29,
    question:
      "Ruth is able to prepare a salad when items are placed within reach at the table and all vegetables have been retrieved from the refrigerator and washed/cleaned. She requires use of adaptive equipment such as a cutting board and knife. She requires assistance to clean the area and put items away when she is finished. What level of assistance does she require for this meal prep activity?",
    options: [
      "Independent",
      "Minimal assistance",
      "Moderate assistance",
      "Maximum assistance",
    ],
  },

  {
    id: 30,
    question:
      "An OTR is completing an intervention session with a client who experienced a traumatic brain injury (TBI) as a result of a motorcycle accident. During the sink-level grooming portion of the evaluation the client demonstrated difficulty completing the task; required verbal cues and hand-over-hand technique to reach, grab and manipulate all grooming items. The client reported that they felt the sink activity went well and is looking forward to working on this again with the OT in future sessions. Which statement would BEST reflect the assessment section of the documentation?",
    options: [
      "Client completed sink-level grooming independently without cues",
      "Client demonstrated difficulty with grooming and required verbal cues and hand-over-hand assistance",
      "Client refused all grooming intervention",
      "Client demonstrated normal functional performance during grooming",
    ],
  },

  {
    id: 31,
    question:
      "An OT is completing an initial evaluation for a client who has recently sustained a right carpal tunnel injury, now status post carpal tunnel repair; they have not been out of bed since surgery. The client uses both hands to push from the bed to stand, then immediately reports pain, dizziness, and feeling lightheaded. What should the OT do next?",
    options: [
      "Stop the activity and assess the client’s symptoms and vital signs",
      "Continue the transfer to improve activity tolerance",
      "Begin resisted hand exercises immediately",
      "Have the client walk independently to assess balance",
    ],
  },

  {
    id: 32,
    question:
      "You are providing proprioceptive neuromuscular facilitation (PNF)-based intervention to a client who recently sustained a stroke, instructing the client to use their right hand to reach up and to the right cabinet, grab a glass, bring it across midline, and place it into the dishwasher on their left side. Which PNF pattern did you incorporate?",
    options: [
      "D1 flexion",
      "D1 extension",
      "D2 flexion",
      "D2 extension",
    ],
  },

  {
    id: 33,
    question:
      "Stabilizing an extremity to reduce incoordination and enable a client to perform activities of daily living (ADLs) is a common practice for clients with which of the following conditions?",
    options: [
      "Ataxia",
      "Aphasia",
      "Dysarthria",
      "Visual field loss",
    ],
  },

  {
    id: 34,
    question:
      "Which of the following is not a component of proper body mechanics used by the therapist when transferring clients?",
    options: [
      "Maintaining a stable base of support",
      "Keeping the client close to your center of gravity",
      "Using proper lifting and weight-shifting techniques",
      "Twisting the trunk while lifting the client",
    ],
  },

  {
    id: 35,
    question:
      "An occupational therapist is addressing sexual dysfunction with a client following a spinal cord injury. The client reports reduced sexual desire, difficulty with arousal, and decreased sensation, while their partner has expressed concern about lack of intimacy. Which of the following is the MOST appropriate focus for the occupational therapist’s intervention?",
    options: [
      "Addressing intimacy and sexual activity through education, adaptation, and communication strategies",
      "Advising the client to completely avoid sexual activity",
      "Focusing exclusively on upper-extremity strengthening",
      "Recommending that the client discontinue intimate relationships",
    ],
  },

  {
    id: 36,
    question:
      "An OT is assigned to evaluate a client who sustained a stroke. During the interdisciplinary team meeting, the therapist is asked to provide input regarding the client’s anticipated discharge needs. The therapist is currently performing the initial evaluation and gathering baseline data. At what point in the occupational therapy process should discharge planning begin?",
    options: [
      "Only on the day of discharge",
      "After all treatment sessions have been completed",
      "From the beginning of the occupational therapy process",
      "Only after the client requests discharge",
    ],
  },

  {
    id: 37,
    question:
      "Which medication is most likely to cause dizziness as a side effect?",
    options: [
      "Antihypertensive medication",
      "Topical moisturizer",
      "Stool softener",
      "Vitamin supplement",
    ],
  },

  {
    id: 38,
    question:
      "An occupational therapist is working with a 32-year-old client with muscular dystrophy who was recently hospitalized due to increased fatigue and difficulty completing ADLs. The client now uses a power wheelchair and reports frustration over decreased independence, especially in managing home tasks and maintaining social engagement. The therapist is preparing a home program and goal plan following a home safety assessment. Which of the following is the MOST appropriate short-term OT goal to support this client’s functional independence and psychosocial adjustment?",
    options: [
      "Client will identify and use appropriate energy-conservation and adaptive strategies to complete selected home-management tasks with reduced assistance",
      "Client will regain full muscular strength within two weeks",
      "Client will discontinue use of the power wheelchair",
      "Client will independently complete all home-management tasks without adaptive equipment",
    ],
  },

  {
    id: 39,
    question:
      "A client with moderate Alzheimer’s disease repeatedly forgets how to prepare meals safely. Which intervention is MOST appropriate?",
    options: [
      "Provide structured routines, visual cues, and simplified steps for meal preparation",
      "Require the client to memorize the entire meal-preparation sequence",
      "Allow the client to prepare meals without supervision",
      "Remove all meaningful activities from the client’s daily routine",
    ],
  },

  {
    id: 40,
    question:
      "You are working with a client with dementia who frequently demonstrates agitated behaviors. During a session, your client’s caregiver comes to you and asks what they can do to decrease the client’s agitation. Which caregiver education recommendation is BEST for the OT to provide?",
    options: [
      "Identify possible triggers and use calm, structured routines and redirection",
      "Argue with the client when they become confused",
      "Increase environmental noise to distract the client",
      "Correct every mistake immediately to improve memory",
    ],
  },

  {
    id: 41,
    question:
      "Which symptom is MOST associated with Parkinson disease?",
    options: [
      "Resting tremor",
      "Sudden hearing loss",
      "Increased visual acuity",
      "Severe abdominal pain",
    ],
  },

  {
    id: 42,
    question:
      "An OT is teaching energy conservation for a client with progressive MS. Which long-term strategy is MOST appropriate?",
    options: [
      "Planning activities with scheduled rest breaks",
      "Completing all activities as quickly as possible",
      "Avoiding all physical activity",
      "Increasing activity intensity throughout the day",
    ],
  },

  {
    id: 43,
    question:
      "You are working with a client on dressing when they suddenly have a verbal outburst and become emotional due to struggling to dress themselves. Upon further investigation, observe your client aimlessly moving/spinning their shirt around trying to determine how to don it and you identify this deficit as dressing apraxia. Which of the following is the MOST appropriate strategy to apply for helping your client to regain their independence with dressing tasks?",
    options: [
      "Provide step-by-step verbal and visual cues during dressing",
      "Have the client complete dressing without any assistance",
      "Remove all clothing choices from the client’s routine",
      "Have the client perform dressing tasks as quickly as possible",
    ],
  },

  {
    id: 44,
    question:
      "An OT is working with a client who has Parkinson’s disease on functional transfers. Upon supine to sit to stand transition the client demonstrates orthostatic hypotension. What education should the OT recommend to the client FIRST?",
    options: [
      "Change positions slowly and pause between transitions",
      "Stand up quickly to improve circulation",
      "Avoid sitting before standing",
      "Increase exercise intensity immediately after waking",
    ],
  },

  {
    id: 45,
    question:
      "An OT is preparing to complete a transfer with a bariatric client from bed to wheelchair for the first time. The first step the OT should take is to:",
    options: [
      "Assess the client, environment, equipment, and transfer requirements",
      "Immediately begin the transfer without assistance",
      "Ask the client to stand independently",
      "Use the smallest available transfer device",
    ],
  },

  {
    id: 46,
    question:
      "An OT is working with a client status post palmar aponeurosis and carpal tunnel release, with a past medical history of CVA with residual impairments to the surgical side. The referral is for an orthotic for your patient for optimizing hand/wrist positioning to reduce risk of contractures and comfort. Which of the following is MOST appropriate recommendation?",
    options: [
      "A properly fitted resting hand/wrist orthosis",
      "A rigid elbow immobilizer",
      "A cervical collar",
      "A knee extension orthosis",
    ],
  },

  {
    id: 47,
    question:
      "A client with Parkinson’s disease reports hypersensitivity in the fingertips that interferes with buttoning clothing. Which occupational therapy intervention is MOST appropriate to improve functional hand use?",
    options: [
      "Gradual desensitization activities combined with functional hand tasks",
      "Avoiding all hand activities",
      "Immobilizing the fingers throughout the day",
      "Increasing resistance during all hand exercises",
    ],
  },

  {
    id: 48,
    question:
      "A client with Huntington disease has tactile defensiveness that limits participation in grooming. Which intervention should the OT implement FIRST?",
    options: [
      "Gradually introduce tolerated textures and provide sensory strategies",
      "Require immediate exposure to highly irritating textures",
      "Stop all grooming activities permanently",
      "Avoid discussing the client’s sensory responses",
    ],
  },

  {
    id: 49,
    question:
      "David is a 56 year old male with a diagnosis of ALS. He lives alone in his own home where he was independent with all ADL/IADLs six months ago. David is concerned about his declining independence in ADL/IADLs and is looking for a rehabilitation team to evaluate his ability to remain in his home independently for as long as possible. David is currently not driving as he feels unsafe when he is on the road as the driver. He is going to work with a peer driving him. Which setting is most appropriate to evaluate David at this time?",
    options: [
      "Home environment",
      "Inpatient surgical unit",
      "School-based setting",
      "Emergency department",
    ],
  },

  {
    id: 50,
    question:
      "An elderly client was recently discharged from a subacute rehab facility after receiving rehab services for a right MCA stroke. At the home follow-up appointment the home health OT is reviewing medication management with the client. The OT plays a supportive role to the physician and nursing staff by doing which of the following?",
    options: [
      "Observing medication-management performance and identifying barriers to safe participation",
      "Independently prescribing new medications",
      "Changing the client’s medication dosage",
      "Discontinuing medications that appear unnecessary",
    ],
  },

  {
    id: 51,
    question:
      "You are working with a client with a past medical history of type 2 diabetes, end stage renal disease, peripheral vascular disease, and fibromyalgia. The client has been admitted to the hospital with multiple falls and complaints of numbness and tingling in their feet. Given their past medical history, the OT suspects the client is experiencing which of the following?",
    options: [
      "Peripheral neuropathy",
      "Acute hearing loss",
      "Visual agnosia",
      "Expressive aphasia",
    ],
  },

  {
    id: 52,
    question:
      "An OT is working with a client who was referred to the outpatient clinic with multiple falls. They have a past medical history of MS, hypertension, and Type I Diabetes. PT has evaluated the client and identified goals for balance and ambulation. What is one of the MOST appropriate areas of intervention for the OT to focus on?",
    options: [
      "ADL/IADL performance and safety strategies",
      "Prescribing antihypertensive medication",
      "Performing surgical treatment for falls",
      "Replacing all physical therapy interventions",
    ],
  },

  {
    id: 53,
    question:
      "An entry-level occupational therapy practitioner has been encouraged to document via point of service level as part of their job duties to promote accurate, timely, and productive documentation skills. While completing their note during a session, the client says to them “I don’t think you’re even listening to me and instead are just looking at your computer”. What is the BEST response the OT should give?",
    options: [
      "Acknowledge the client’s concern and explain that they will give the client their full attention",
      "Ignore the client’s comment and continue documenting",
      "Tell the client that documentation is more important than conversation",
      "Stop providing therapy for the remainder of the session",
    ],
  },

  {
    id: 54,
    question:
      "You have been instructed to write a summary of your client’s functional status including their functional status at the start of services, a summary of their change to date, and if/when any goals were met. You also should include any outcome measures and recommendations for follow-up. What type of documentation note should you write?",
    options: [
      "Discharge summary",
      "Daily treatment note",
      "Initial evaluation",
      "Incident report",
    ],
  },

  {
    id: 55,
    question:
      "An OTR specializing in neurodegenerative disease and neurological rehabilitation has been asked by a physician to assess a client for occupational therapy services. Which documentation note is the most appropriate for the OT to complete?",
    options: [
      "Occupational therapy evaluation",
      "Daily treatment note",
      "Discharge summary",
      "Incident report",
    ],
  },

  {
    id: 56,
    question:
      "An OT receives a referral for a client with a recent TBI. The referral only states “OT evaluation and treatment for ataxia/ADLs”. What should the OT anticipate assessing when they meet with the client?",
    options: [
      "Functional performance of ADLs, coordination, balance, and safety",
      "Only the client’s hearing ability",
      "Only the client’s cardiovascular endurance",
      "Only the client’s handwriting speed",
    ],
  },

  {
    id: 57,
    question:
      "Using evidence-based practice to help guide your interventions is best practice and client centered in which of the following scenarios?",
    options: [
      "Selecting interventions based on research evidence, clinical expertise, and client preferences",
      "Using the same intervention for every client regardless of diagnosis",
      "Choosing interventions solely because they are convenient for the therapist",
      "Avoiding current research when developing treatment plans",
    ],
  },

  {
    id: 58,
    question:
      "You have been asked to evaluate a client in the acute care setting, who was referred to OT services after being admitted for a fall with subsequent subdural hematoma and TBI. You are a new clinician and unsure about these diagnosis and their corresponding interventions. What is the first thing you should do?",
    options: [
      "Consult appropriate evidence-based resources and seek guidance from an experienced clinician",
      "Begin treatment without reviewing the diagnosis",
      "Ignore the referral information",
      "Ask the client to determine the appropriate medical intervention",
    ],
  },

  {
    id: 59,
    question:
      "An OT is working with a client who was referred to OT services with a diagnosis of carpal tunnel syndrome on the right. Below is what was written by the OT during initial evaluation, “Client presents to OT with CTS pain, stating “I am frustrated that I cannot type as fast as I used to and it is making me slow at my job!”. PMH includes prior CVA, hypotension, falls, mild cognitive impairment, and UTI. Client demonstrates limited AROM of the right wrist joints, MCPs, and PIPs of digits 3-5 as well as decreased sensation. The client is alert and oriented to person, place, time, and situation. Further impairments are observed with upper body dressing (buttons, specifically), and toileting hygiene”. What should be the primary focus for OT intervention?",
    options: [
      "Addressing the client’s functional limitations affecting work and daily activities",
      "Focusing only on the client’s history of UTI",
      "Eliminating all upper-body dressing activities",
      "Treating only the client’s cognitive status",
    ],
  },

  {
    id: 60,
    question:
      "A patient is newly admitted to acute care with a diagnosis of MCA stroke. Which of the following should the OT anticipate to observe during the initial OT assessment?",
    options: [
      "Impairments in motor control, sensation, cognition, vision, and ADL performance",
      "Only isolated lower-extremity weakness",
      "Only changes in hearing",
      "No changes in functional performance",
    ],
  },

  {
    id: 61,
    question:
      "Adults with neurodegenerative diseases and resultant physical disabilities may give up participation in leisure activities, leading to increased risk for social isolation. What is the MOST likely reason for this change?",
    options: [
      "Increased difficulty accessing and participating in meaningful activities",
      "Increased interest in solitary activities",
      "Improved ability to manage community activities independently",
      "Increased tolerance for social environments",
    ],
  },

  {
    id: 62,
    question:
      "Use of humor and laughter as part of the therapeutic relationship…",
    options: [
      "Should always be avoided because it may reduce professionalism",
      "Can be appropriate when used therapeutically and according to the client’s preferences",
      "Should only be used with clients who have cognitive impairments",
      "Should be used during every treatment session",
    ],
  },

  {
    id: 63,
    question:
      "How often should an OT be writing documentation?",
    options: [
      "Only at the end of the plan of care",
      "Only when a significant change occurs",
      "According to required documentation standards and as services are provided",
      "Once every two weeks",
    ],
  },

  {
    id: 64,
    question:
      "An OT is evaluating a client in their home, and the client has verbalized that they do not need or want any OT services. What is the MOST appropriate response of the OT?",
    options: [
      "Continue treatment because the referral has already been completed",
      "Explain the benefits of OT and respect the client’s right to make an informed decision",
      "Ask the family member to make the decision for the client",
      "Begin treatment and obtain consent afterward",
    ],
  },

  {
    id: 65,
    question:
      "When determining intervention goals, the OT should primarily consider:",
    options: [
      "The therapist’s preferred treatment techniques",
      "The client’s priorities, occupations, needs, and desired outcomes",
      "The diagnosis alone",
      "The recommendations of other healthcare professionals only",
    ],
  },

  {
    id: 66,
    question:
      "Which of the following statements is INCORRECT?",
    options: [
      "OT intervention should be client-centered",
      "Goals should be meaningful to the client",
      "Intervention should be based solely on the therapist’s preferences",
      "Occupational performance should be considered when developing intervention plans",
    ],
  },

  {
    id: 67,
    question:
      "An OT is writing the subjective section of their initial evaluation. Which of the following should NOT be included?",
    options: [
      "The client’s reported concerns",
      "The client’s description of their occupational difficulties",
      "Objective measurements obtained during the evaluation",
      "The client’s reported goals and priorities",
    ],
  },

  {
    id: 68,
    question:
      "An OT is working with a new above-knee amputation patient on lower body dressing. The client is reporting increased pain below the knee of their surgical limb. What is the MOST appropriate intervention strategy for the OT to apply for pain management and neuroplasticity?",
    options: [
      "Mirror therapy",
      "Complete bed rest",
      "Avoid all sensory stimulation to the limb",
      "Restrict the client from participating in dressing activities",
    ],
  },

  {
    id: 69,
    question:
      "An OT is working with a client with a left visual field cut after a stroke. The client is demonstrating poor functional mobility including impaired ability to navigate their environment, increased falls, not eating the food on the left side of their plate, and difficulty telling time. What intervention strategy would be MOST beneficial for this patient?",
    options: [
      "Visual scanning training",
      "Complete avoidance of activities requiring visual attention",
      "Strengthening exercises for the unaffected upper extremity only",
      "Bed mobility training only",
    ],
  },

  {
    id: 70,
    question:
      "Which description of rehabilitation potential is most likely to be covered by insurance for a client with a progressive degenerative neurological condition who receives occupational therapy services in an acute inpatient rehabilitation setting?",
    options: [
      "The client is expected to return completely to their previous level of function",
      "The client demonstrates the ability to benefit from skilled therapy and improve functional independence",
      "The client requires no assistance with daily activities",
      "The client has no anticipated changes in functional status",
    ],
  },

  {
    id: 71,
    question:
      "Which of the following services are offered by Alpha One?",
    options: [
      "Services supporting independent living and community participation",
      "Acute surgical services",
      "Inpatient hospital services only",
      "Emergency medical transportation only",
    ],
  },

  {
    id: 72,
    question:
      "An OT prepares to transfer an individual who requires use of a gait belt for safety during all transfers. The OT cannot locate the transfer gait belt that the OT had planned to use during the transfer. Which is the OT’s best course of action?",
    options: [
      "Complete the transfer without the gait belt",
      "Ask the client to stand independently",
      "Locate an appropriate gait belt before completing the transfer",
      "Ask the client to hold onto the therapist during the transfer",
    ],
  },

  {
    id: 73,
    question:
      "An adult diagnosed with multiple sclerosis over 10 years ago experiences an exacerbation of symptoms. The individual’s principle complaint is decreased strength and endurance. The person can ambulate short distances with a cane in the home and uses a wheelchair outside of the home. The client asks for suggestions to enable independent home maintenance. Which is the best positioning recommendation for the OT to suggest the person to use in meal prep?",
    options: [
      "Complete all meal preparation while standing",
      "Sit on a stable chair or stool during tasks to conserve energy",
      "Remain in the wheelchair without positioning support",
      "Avoid meal preparation completely",
    ],
  },

  {
    id: 74,
    question:
      "Which of the following neurological changes is MOST associated with the motor symptoms seen in Parkinson’s disease?",
    options: [
      "Degeneration involving the basal ganglia and dopamine pathways",
      "Damage to the peripheral sensory nerves only",
      "Increased production of dopamine in the brain",
      "Damage limited to the visual cortex",
    ],
  },

  {
    id: 75,
    question:
      "An older adult client with impaired balance and mild cognitive decline wants to resume walking to the local senior center, which requires crossing a busy intersection. Which action should the OT take FIRST?",
    options: [
      "Tell the client they can no longer walk in the community",
      "Assess the client’s ability to safely navigate the route and cross the intersection",
      "Immediately recommend a wheelchair for all community mobility",
      "Begin strengthening exercises without assessing community mobility",
    ],
  },

  {
    id: 76,
    question:
      "An OT is working in the emergency department. The PT and SLP have all evaluated the client and deem them safe to return home, however the OT noticed that the patient was having difficulty recalling why they were in the hospital and was unable to accurately answer what they would do at home in an emergency situation. What would the next, best course of action be for the OT?",
    options: [
      "Discharge the client because the other disciplines cleared them",
      "Ignore the cognitive concerns because cognition is not addressed by OT",
      "Communicate the concerns to the appropriate healthcare team members and recommend further assessment",
      "Ask the client to sign a statement accepting responsibility for discharge",
    ],
  },

  {
    id: 77,
    question:
      "An OT working for a rural community health organization is developing transportation resources for aging adults with limited mobility. Which of the following would be the MOST appropriate strategy to address transportation gaps?",
    options: [
      "Develop partnerships with existing community transportation resources",
      "Recommend that all clients stop attending community activities",
      "Require every client to obtain a personal vehicle",
      "Limit transportation services to clients living in urban areas",
    ],
  },

  {
    id: 78,
    question:
      "Which of the following BEST represents examples of adaptive driving equipment commonly used to compensate for motor impairments in drivers?",
    options: [
      "Hand controls, spinner knobs, and pedal adaptations",
      "Standard reading glasses and hearing aids",
      "Wheelchair cushions and transfer boards",
      "Shower chairs and grab bars",
    ],
  },

  {
    id: 79,
    question:
      "When reviewing a chart, it is okay to leave the chart open and your computer unattended for which of the following scenarios?",
    options: [
      "When stepping away for less than five minutes",
      "When another healthcare professional is nearby",
      "When the client has already left the facility",
      "It is not appropriate to leave protected health information accessible on an unattended computer",
    ],
  },

  {
    id: 80,
    question:
      "A client with left hemiparesis following a right CVA has difficulty donning a pullover shirt. Which of the following is the MOST appropriate instruction?",
    options: [
      "Put the unaffected arm into the shirt first",
      "Put the affected arm into the sleeve first",
      "Put the shirt over the head before placing either arm into the sleeves",
      "Avoid using the affected arm during dressing",
    ],
  },

  {
    id: 81,
    question:
      "What is the first step you would take in teaching a client hemiplegic lower extremity dressing while seated at the edge of the bed?",
    options: [
      "Teach the client to dress the affected leg first",
      "Have the client stand before beginning dressing",
      "Dress the unaffected leg first",
      "Complete the entire dressing task for the client",
    ],
  },

  {
    id: 82,
    question:
      "What is the definition of the CPT code for therapeutic activity?",
    options: [
      "Activities designed to improve functional performance through dynamic tasks",
      "Passive range-of-motion exercises performed by the therapist",
      "Manual therapy performed to reduce muscle tension",
      "Assessment of a client’s occupational history",
    ],
  },

  {
    id: 83,
    question:
      "Your client is participating in preparatory exercises at the table prior to beginning a tabletop game in standing. The client is using therapy putty and theraband for the exercises. Which CPT code would you use for billing?",
    options: [
      "Therapeutic exercise",
      "Self-care/home management training",
      "Manual therapy",
      "Neuromuscular reeducation",
    ],
  },

  {
    id: 84,
    question:
      "You are working with a client in home health with a long-term goal of being independent with donning their shoes and socks while seated in a chair. This means which of the following will be included in this goal?",
    options: [
      "Self-care activity",
      "Instrumental activity only",
      "Rest and sleep activity",
      "Social participation activity",
    ],
  },

  {
    id: 85,
    question:
      "Meal preparation is considered ________ in the OTPF.",
    options: [
      "An instrumental activity of daily living",
      "A basic activity of daily living",
      "A leisure activity",
      "A social participation activity",
    ],
  },

  {
    id: 86,
    question:
      "Tardive dyskinesia may be seen in a client taking ______ medication.",
    options: [
      "Antipsychotic",
      "Antacid",
      "Antibiotic",
      "Antihypertensive",
    ],
  },

  {
    id: 87,
    question:
      "A client with Parkinson’s disease is discharged home to their assisted living with a new medication. The OT has initiated training with the client on their new medication schedule; however, the client requires moderate assistance to organize their pill box and take the correct medication. What should the OT recommend first?",
    options: [
      "Use an appropriate medication-management strategy or adaptive system to support independence",
      "Have the client discontinue the medication",
      "Have the caregiver administer every medication permanently",
      "Tell the client to organize the medications without assistance",
    ],
  },

  {
    id: 88,
    question:
      "How people use and integrate their thinking and processing skills to accomplish everyday activities in clinical and community living settings is the definition of which term?",
    options: [
      "Cognitive performance",
      "Physical endurance",
      "Social participation",
      "Motor coordination",
    ],
  },

  {
    id: 89,
    question:
      "You are working with a client with a progressive degenerative neurological condition. Which approach would you use in designing the intervention plan?",
    options: [
      "Focus on maintaining function, safety, participation, and quality of life",
      "Focus only on restoring lost neurological function",
      "Avoid adaptive strategies to promote natural recovery",
      "Provide the same intervention plan throughout the disease process",
    ],
  },

  {
    id: 90,
    question:
      "You are working with a client following a brain injury using metacognitive strategies as an intervention approach. Which intervention best matches this intervention approach?",
    options: [
      "Helping the client recognize and monitor their own thinking and performance",
      "Completing all activities for the client",
      "Avoiding discussion of the client’s performance",
      "Focusing exclusively on strengthening exercises",
    ],
  },

  {
    id: 91,
    question:
      "Errorless learning is an approach used with clients with cognitive impairment. Which client would likely benefit from this type of approach?",
    options: [
      "A client with significant memory impairment who benefits from preventing repeated errors",
      "A client with normal cognition learning a new exercise program",
      "A client with an isolated ankle injury",
      "A client who has no difficulty learning or remembering information",
    ],
  },

  {
    id: 92,
    question:
      "Which medication would you likely see used if your client has Parkinson’s disease?",
    options: [
      "Levodopa/carbidopa",
      "Amoxicillin",
      "Omeprazole",
      "Acetaminophen",
    ],
  },

  {
    id: 93,
    question:
      "You have planned a 60 minute ADL intervention session with your client; however, the client is only able to complete 43 minutes of the session due to fatigue. What is the appropriate billing in terms of CPT codes for this session?",
    options: [
      "Bill only for the skilled treatment time actually provided",
      "Bill the full 60 minutes because that was the scheduled time",
      "Bill for 90 minutes because the client was scheduled for an hour",
      "Do not document or bill the session",
    ],
  },

  {
    id: 94,
    question:
      "Extrapyramidal symptoms may be seen in which client?",
    options: [
      "A client taking certain antipsychotic medications",
      "A client taking only vitamin supplements",
      "A client with an uncomplicated ankle sprain",
      "A client recovering from a minor skin injury",
    ],
  },

  {
    id: 95,
    question:
      "You are working with an 89 year old client who was diagnosed with dementia 12 months ago. His daughter is concerned because he recently went to a caregiver information session at the Alzheimer’s Association given by a pharmacist and found out that two of her father’s medications are on the BEERS list. What is the first thing you should recommend to the daughter?",
    options: [
      "Discuss the medications with the prescribing healthcare provider or pharmacist",
      "Stop both medications immediately",
      "Double the dose of both medications",
      "Replace both medications with herbal supplements",
    ],
  },

  {
    id: 96,
    question:
      "You are working with your client in a home health setting and discover that they are taking several herbal supplements as part of their medication regimen. What should you do first?",
    options: [
      "Ask about the supplements and communicate the information to the appropriate healthcare provider",
      "Tell the client to stop all prescribed medications",
      "Tell the client that herbal supplements are always safe",
      "Ignore the supplements because they are not prescription medications",
    ],
  },

  {
    id: 97,
    question:
      "A 44 year old female with a C5 spinal cord injury is working on toileting as part of her discharge plan to home from the acute rehabilitation setting. Which of the following long-term goals is the most appropriate for this client?",
    options: [
      "Complete toileting with the highest practical level of independence using appropriate adaptive strategies",
      "Walk independently to the bathroom without any assistive equipment",
      "Complete all toileting tasks without any training",
      "Avoid using the bathroom independently after discharge",
    ],
  },

  {
    id: 98,
    question:
      "The SNF where you work has two COTA practitioners and two OTR practitioners. Which of the following is most appropriate for the COTA practitioner to do with a client with a left CVA and right hemiplegia?",
    options: [
      "Implement the intervention plan established by the OTR and report the client’s progress",
      "Independently establish the client’s occupational therapy evaluation and diagnosis",
      "Change the client’s established goals without consulting the OTR",
      "Discharge the client independently from occupational therapy services",
    ],
  },

  {
    id: 99,
    question:
      "You observe a client during an initial evaluation attempt to don their shirt while seated at the edge of the bed. The client is only able to put their unaffected arm in the sleeve and put the shirt over their head without assistance. What level of assistance would you document this client for upper body dressing?",
    options: [
      "Independent",
      "Minimal assistance",
      "Moderate assistance",
      "Maximum assistance",
    ],
  },

  {
    id: 100,
    question:
      "You have completed this exam. What level of difficulty would you grade this exam?",
    options: [
      "Easy",
      "Moderate",
      "Difficult",
      "Very difficult",
    ],
  },
]


function ExamPage() {
  const [answers, setAnswers] = useState({});
  const [elapsedSeconds, setElapsedSeconds] = useState(270 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":");
  };

  const handleAnswerChange = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const scrollToQuestion = (questionId) => {
    const element = document.getElementById(`question-${questionId}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="exam-page">

      {/* SESSION TIMER */}

      <div className="exam-timer">
        Session Duration: {formatTime(elapsedSeconds)}
      </div>


      {/* EXAM HEADER */}

      <header className="exam-header">
        <h1>Final Exam - Requires Respondus LockDown Browser</h1>
      </header>


      {/* EXAM CONTENT */}

      <div className="exam-layout">

        {/* LEFT QUESTION NAVIGATION */}

        <aside className="question-nav">

          <div className="nav-title">
            Questions
          </div>

          <div className="question-numbers">

            {questions.map((question) => {

              const isAnswered =
                answers[question.id] !== undefined;

              return (
                <button
                  key={question.id}
                  type="button"
                  className={`question-number ${
                    isAnswered ? "answered" : ""
                  }`}
                  onClick={() => scrollToQuestion(question.id)}
                >

                  <span className="question-number-value">
                    {question.id}
                  </span>

                  <span className="question-status">
                    {isAnswered ? "✓" : "--"}
                  </span>

                </button>
              );

            })}

          </div>

        </aside>


        {/* ALL QUESTIONS */}

        <main className="questions-container">

          {questions.map((question) => (

            <section
              key={question.id}
              id={`question-${question.id}`}
              className="question-card"
            >

              {/* QUESTION TITLE */}

              <div className="question-title">
                Question {question.id} <span>(1 point)</span>
              </div>


              {/* QUESTION TEXT */}

              <p className="question-text">
                {question.question}
              </p>


              {/* ANSWER OPTIONS */}

              <div className="options">

                {question.options.map((option, index) => {

                  const isSelected =
                    answers[question.id] === index;

                  return (
                    <label
                      key={index}
                      className={`option ${
                        isSelected ? "selected" : ""
                      }`}
                    >

                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={index}
                        checked={isSelected}
                        onChange={() =>
                          handleAnswerChange(
                            question.id,
                            index
                          )
                        }
                      />

                      <span>
                        {String.fromCharCode(65 + index)}.{" "}
                        {option}
                      </span>

                    </label>
                  );

                })}

              </div>


              {/* SAVED INDICATOR */}

              {answers[question.id] !== undefined && (
                <div className="saved-status">
                  ✓ Saved
                </div>
              )}

            </section>

          ))}

        </main>

      </div>


      {/* BOTTOM STATUS BAR */}

      <footer className="exam-status-bar">

        <div className="status-left">

          <span>
            Status: <strong>Connected</strong>
          </span>

          <span>
            Connection: <strong>P2P</strong>
          </span>

        </div>

      </footer>

    </div>
  );
}

export default ExamPage;