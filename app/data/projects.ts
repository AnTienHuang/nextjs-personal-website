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
  }
];

export default projects
