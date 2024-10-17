import { subtle } from "crypto";

const projects = [
  {
    slug: 'roomradar',
    title: 'RoomRadar.ai',
    subtitle: 'Revolutionising Hotel Search with Azure Maps and Azure AI Search',
    date: 'JUN 2024 ~ AUG 2024',
    order: 1,
    content: `
RoomRadar.ai is an AI-powered hotel search application developed by [@Anchit](https://www.linkedin.com/in/anchitchandran/), [@Matt](https://www.linkedin.com/in/matt-peniket-6a051318a/) and [myself](https://www.linkedin.com/in/an-tien-huang/) as part of our MSc Computer Science project at University College London. Under the expert guidance of our supervisors, Dr. [@Yun_Fu](https://www.linkedin.com/in/dryunfu/) from UCL and Prof. [@Lee_Stott](https://linkedin.com/in/leestott/) from Microsoft, we created a cutting-edge solution that leverages Microsoft Azure infrastructure to deliver an exceptional user experience.
Our application utilises Azure OpenAI and Azure AI Search to offer a multimodal interface, enabling users to search for hotels using text, voice, and images. Additionally, Azure Maps is also integrated to provide an interactive map for a more engaging and intuitive experience for our users.
RoomRadar.ai showcases the potential of AI in enhancing travel planning, combining advanced technology with user-friendly design to revolutionise the way people find their ideal accommodations.

RoomRadar.ai was designed to enhance the hotel search user experience with features that traditional hotel search applications do not offer. The interactive map and image search are two of these features:
 
- **Map View**
  1. Display hotels on a map for an intuitive and visual way to explore search results
  2. Include hotel cards in the side panel for a neat and organised display of hotel details.
  3. Provide route planning information between the selected hotel and nearby underground stations, eliminating the need for users to check this separately.
- **Image Search**
  1. Allow users to use a base image to find hotels with similar visuals. This feature lets users express preferences that may be difficult to define using filters or text.

![Map gif](/images/roomradar/map.gif)
![Image Search gif](/images/roomradar/img_search.gif)

The diagram below provides a high-level overview of RoomRadar’s architecture:
![Project 1 screenshot](/images/roomradar/aod.png)

Details of the project can be found in my Microsoft [blog](https://techcommunity.microsoft.com/t5/educator-developer-blog/roomradar-ai-revolutionising-hotel-search-with-azure-maps-and/ba-p/4264443).

I also wrote a tutorial for integrating Azure Maps with Next.js: [link](https://medium.com/@antien.huang/azure-maps-tutorial-with-nextjs-99f395f07a19?source=friends_link&sk=c3a20619f76e12fb7c55c76f97e2618f)
`
  },
  {
    slug: 'motioninput',
    title: 'MotionInput Games Website',
    subtitle: 'Website development for MotionInput Games: https://www.motioninputgames.com',
    date: 'JAN 2024 ~ APR 2024',
    order: 2,
    content: `
MotionInput Games, a spinout from UCL Computer Science, is focused on creating new ways to interact with software and games through movement. By using everyday PCs and webcams, it enables users to control games and applications through face and body movements, without the need for specialized equipment. This allows children to run and jump to control their favorite games, while adults can enjoy more active engagement after long periods of sitting. The technology also promotes equitable computing, making digital experiences accessible to people of all physical abilities.

My team and I developed the current [website](https://www.motioninputgames.com) for MotionInput Games with Next.js. I also developed a Content Management System for it with Prisma and PostgreSQL to help admins manage the case studies as well as other types of data records.

Below are the overview of the website architecture and site map:
![Architecture Overview](/images/motioninput/aod.png)
![Site Map](/images/motioninput/sitemap.png)
    ` 
  },
  {
    slug: 'clinscribe',
    title: 'ClinScribe',
    subtitle: 'AI-powered transcriber for doctors, developed during 2024 UCL FHIR Hackathon',
    date: 'MAR 2024',
    order: 3,
    content: `
![Demo](/images/clinscribe/demo.gif)
There are 3 big issues for the current clinical procedure in the UK:
1. Clinicians spend 1/3 of their workday on documentation, away from actual clinical duties.
2. Most notes are recorded post-consultation, increasing the surface area for human errors.
3. Writing notes during consultations decreases the presence with patients, harming the quality of the interaction.

During the UCL FHIR hackathon 2024, we created a solution to ease this burden, leveraging FIHR, a global standard allowing healthcare data interoperability.
In response to these problems, we've developed a solution that automatically transcribes clinical consultation audio and generates artefacts such as clinical letters or FHIR queries to update the EHR system.
Our solution leverages the Azure stack with an App Service orchestrating the data flow between the user and different components of the system.
1. Upon uploading a consultation recording, the Whisper Model from the Azure OpenAI Service is utilised for transcription generation.
2. This transcription is then transformed into FHIR-compatible JSON by the GPT4-Turbo model.
3. Finally, after the clinician confirms the content and format, the output is dispatched to a FHIR-compatible database.
This makes our solution EHR-agnostic and ready to integrate with different EHR products.
![Architecture Overview](/images/clinscribe/aod.png)
    `
  }
];

export default projects
