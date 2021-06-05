const PROJECTS: Object[] = [
    {
        id: '1',
        img: '/my_website.jpg',
        alt: 'my website screen',
        width: 500,
        height: 250,
        name: 'Personal Portfolio Website',
        tech: 'Next.js, React, Typescript',
        date: 'May 2021',
        description: "To illustrate my front-end web development and other skills, I have created this portfolio website for them. I develop this website using Next.js, React, and Framer motion for animation and page transition. The website contains four pages: Home, About, Projects, and Contact. The Home page will briefly introduce me. Next, the About page will discuss my in-depth including history, experiences, and skills. Subsequently, the Projects page will show you my projects while I'm studying at the university. Finally, the Contact page provides you my CV and social links, which you can reach me."
    },
    {
        id: '2',
        img: '/iciea_2021_paper.jpg',
        alt: 'my_paper',
        width: 300,
        height: 400,
        name: 'Automatic Aircraft Shadow Removal from Remote Sensing Images Using Mask-ShadowGAN',
        tech: 'Python, Numpy, OpenCV',
        date: '2020 - 2021',
        description: 'This work is already accepted and presented at the 8th International Conference on Industrial Engineering and Applications (ICIEA 2021) on 23-26 April 2021 at Kyoto (remote conference). It is also a senior project of my final year student at Chulalongkorn University.',
        link: 'https://ieeexplore.ieee.org/document/9436794',
        certificate: 'https://drive.google.com/file/d/1d6qZwHKSGRqHdE-4tOFTGcXivIw-pQZ9/view?usp=sharing'
    },
    {
        id: '3',
        img: '/cv_text_recog.jpg',
        alt: 'text recognition results',
        width: 400,
        height: 300,
        name: 'Text Recognition in Thai Road Sign',
        tech: 'MATLAB',
        date: '2019',
        description: "The work is a group project part of the Computer Vision course developed in MATLAB. There are three main processes: text detection, feature extraction, and classification. My responsibility is to extract the feature from letters and to develop a classification model. HOG (Histogram of Oriented Gradients) use for feature extraction using an 8x8 sliding window. For the classification model, I select SVC (Support Vector Classification) to predict the letter. The training and testing set collected from Google Street View Map manually then divided by 80/20 for use in the training/testing process."
    },
    {
        id: '4',
        img: '/ml_prediction.jpg',
        alt: 'price prediction graphs',
        width: 300,
        height: 400,
        name: 'Price Prediction using Machine Learning',
        tech: 'Python, Pandas, Numpy',
        date: '2019',
        description: "I'm also interested in Machine Learning, which encourages me to enroll in this course. I mostly learned about its mathematical perspective. Then I was assigned to develop the price prediction project. I picked the Linear Regression and Neural Network to create the prediction model, which involved the data cleaning process. After that, I use Google Colab to construct it in the Python environment and plot the graphs to compare the two models using Pandas."
    },
    {
        id: '5',
        img: '/ai_proj.jpg',
        alt: 'AI bot code',
        width: 300,
        height: 400,
        name: 'AI Bot Contest Group Project',
        tech: 'Python',
        date: '2019',
        description: "The AI course group project has a lot of freedom to chose the topic, in which my team comes up with Bot contest amongst members. Each group member has to create their agent to play the game: mysterious treasure, which bot has to accumulate many points to beat its opponent. I develop my bot using minimax (depth=6) with alpha-beta pruning. The idea behind this is I want to collect many points as possible while decreasing the opponent's score, which is the optimal way. The minimax method can generate numerous possible routes of movement, which hurts the performance. So I adopt the alpha-beta pruning to cut the low score yielding node out. The heuristic function is the total accumulated score from each path."
    },
    {
        id: '6',
        img: '/people_tracking_ip.jpg',
        alt: 'people tracking',
        width: 350,
        height: 350,
        name: 'People Tracking Project',
        tech: 'Python, OpenCV',
        date: '2019',
        description: "The most cross-course project I ever made in my junior year involved the Image Processing, Requirement Engineering, and Software Engineering course. My group wants to develop a bus queue management system in my university called CU PopQ. It required us to create the Software Requirement Specification (SRS), collect users' requirements, does the system design by creating diagrams, and design a mock-up application. The many courses mean the different group members but the same core members, which are my other two best friends (Mafeung and Bell). I'm the team lead responsible for coordination between members, help building SRS, creating diagrams, and developing the people tracking system. The tracking system idea is mainly the image subtraction, which can detect moving people by subtracting their frame with the plain background frame. After that, I calculate the centroid of them for counting purpose. The in-out counting is done by draw a threshold line that added/subtracted the moving in/out centroid. I feel that I get tons of skills by doing this project, and I'm proud of it."
    },
    {
        id: '7',
        img: '/ocr_ip.jpg',
        alt: 'OCR using Image Processing',
        width: 400,
        height: 300,
        name: 'OCR Project',
        tech: 'Python, OpenCV',
        date: '2019',
        description: 'In junior year, I enroll in the Image Processing course, which has the term project: OCR from given images. I use the thresholding technique to differentiate characters from the background then draw a green rectangle around it to indicate the letter area. The project was developed in Python using the OpenCV library.'
    },
    {
        id: '8',
        img: '/calculator_circuit.jpg',
        alt: 'calculator circuit',
        width: 400,
        height: 300,
        name: 'Calculator Circuit Project',
        tech: 'Logicworks',
        date: '2018',
        description: "The project demonstrates my understanding of logic gates and electronic circuits. It is part of the Computer System course, which is the duo project develop in Logicworks. I'm working on almost every primary component of the calculator, such as adders, subtractors, multiplier, BCD, seven-segments, counter, comparator, inverse, etc."
    },
    {
        id: '9',
        img: '/java_airplane_ticket_booking.jpg',
        alt: 'airplane ticket booking app',
        width: 400,
        height: 300,
        name: 'Airplane Ticket Booking Application',
        tech: 'Java, JavaFX',
        date: '2018',
        description: 'The application is the final project of the Programming Technique course, in which I use Java and JavaFX to create GUI. It contains three pages: login, flight information, and booking page. Users can choose a destination, book and cancel their flight, as well as inspect their booking history.'
    },
]

export { PROJECTS }
