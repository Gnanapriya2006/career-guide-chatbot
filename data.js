const careerData = {
    start: {
        message: "Hi there! I'm here to help you explore career paths. What interests you the most?",
        options: ["Technology", "Creative Arts", "Science & Health", "Business"]
    },
    Technology: {
        message: "Technology is a vast field! What do you enjoy doing with computers?",
        options: ["Coding & Building", "Data & Analysis", "Design & Aesthetics", "Hardware & Networks"]
    },
    "Creative Arts": {
        message: "Creativity is amazing! How do you like to express yourself?",
        options: ["Visual Art & Drawing", "Writing & Storytelling", "Music & Sound"]
    },
    "Science & Health": {
        message: "Helping people and understanding the world! What's your focus?",
        options: ["Patient Care", "Research & Lab Work", "Mental Health"]
    },
    "Business": {
        message: "Business makes the world go round! What role appeals to you?",
        options: ["Leadership & Strategy", "Finance & Numbers", "Marketing & People"]
    },
    // Leaf nodes (End results)
    "Coding & Building": {
        message: "You seem perfect for **Software Engineering** or **Web Development**! You build the tools others use.",
        isResult: true
    },
    "Data & Analysis": {
        message: "Consider **Data Science** or **Data Analytics**. You turn raw data into insights!",
        isResult: true
    },
    "Design & Aesthetics": {
        message: "**UI/UX Design** might be your calling. You make technology beautiful and usable.",
        isResult: true
    },
    "Hardware & Networks": {
        message: "Look into **IT Support** or **Network Engineering**. You keep the infrastructure running.",
        isResult: true
    },
    "Visual Art & Drawing": {
        message: "**Graphic Design**, **Illustration**, or **Animation** could be great for you!",
        isResult: true
    },
    "Writing & Storytelling": {
        message: "Consider **Content Writing**, **Copywriting**, or **Journalism**.",
        isResult: true
    },
    "Music & Sound": {
        message: "**Audio Engineering** or **Music Production** sounds like a match!",
        isResult: true
    },
    "Patient Care": {
        message: "**Nursing**, **Medicine (Doctor)**, or **Physical Therapy** fit well here.",
        isResult: true
    },
    "Research & Lab Work": {
        message: "**Biomedical Science**, **Chemistry**, or **Pharma Research** are strong options.",
        isResult: true
    },
    "Mental Health": {
        message: "**Psychology** or **Counseling** allows you to support others' well-being.",
        isResult: true
    },
    "Leadership & Strategy": {
        message: "**Project Management** or **Business Administration** might suit you.",
        isResult: true
    },
    "Finance & Numbers": {
        message: "**Accounting**, **Investment Banking**, or **Financial Analysis**.",
        isResult: true
    },
    "Marketing & People": {
        message: "**Digital Marketing**, **HR**, or **Public Relations**.",
        isResult: true
    }
};
