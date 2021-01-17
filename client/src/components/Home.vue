<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <SectionTitle
          v-bind:sectionTitle="'Markus Talka'"
          v-bind:pageTitle="true"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-5" sm="12" md="6">
        <SectionTitle v-bind:sectionTitle="'About me'" />
        <v-card class="experience-card">
          <v-card-text>
            <div>
              Welcome, weary traveler, to my humble website. My name is Markus
              Talka, and I work as a software developer and in many other roles
              in the software industry.
            </div>
            <div style="margin-top: 1rem">
              I have managed to amass a fair amount of free-time activities,
              many of which revolve around my lifelong computer hobby. I reside
              in Helsinki, Finland. Feel free to be in touch, you can find my
              contact links below.
            </div>
          </v-card-text>
        </v-card>
        <SectionTitle v-bind:sectionTitle="'Contact'" />
        <v-row cols="12" dense>
          <v-col cols="4">
            <v-card class="mx-auto experience-card">
              <v-card-text>
                <a href="https://www.linkedin.com/in/markustalka/">LinkedIn</a>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto experience-card">
              <v-card-text>
                <a href="https://www.facebook.com/markustalka">Facebook</a>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto experience-card">
              <v-card-text>
                <a href="https://twitch.tv/makketee">Twitch</a>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto experience-card">
              <v-card-text>
                <a href="https://www.instagram.com/mtalka/">Instagram</a>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="mx-auto experience-card">
              <v-card-text>
                <a href="https://github.com/mtalka/">Github</a>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto experience-card">
              <v-card-text>
                <a href="mailto:markus.talka@gmail.com">E-mail</a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <SectionTitle v-bind:sectionTitle="'Work'" />
        <ExperienceCard
          v-for="(item, i) in workListItems"
          :key="i"
          :header="item.header"
          :time="item.time"
          :title="item.title"
          :isExpandable="item.isExpandable"
          :description="item.description"
        />
        <SectionTitle v-bind:sectionTitle="'School'" />
        <ExperienceCard
          v-for="(item, i) in schoolListItems"
          :key="i"
          :header="item.header"
          :time="item.time"
          :title="item.title"
        />
      </v-col>

      <v-col class="mb-5" sm="12" md="6">
        <SectionTitle v-bind:sectionTitle="'Projects'" />
        <ImageCard
          v-for="(item, i) in imageListItems"
          :key="i"
          :header="item.header"
          :description="item.description"
          :source="item.source"
          :link="item.link"
        />
        <ExperienceCard
          v-for="(item, i) in projectListItems"
          :key="i"
          :header="item.header"
          :time="item.time"
          :title="item.title"
          :isExpandable="item.isExpandable"
          :description="item.description"
        />
        <SectionTitle v-bind:sectionTitle="'Certifications and courses'" />
        <ExperienceCard
          v-for="(item, i) in courseListItems"
          :key="i"
          :header="item.header"
          :time="item.time"
          :title="item.title"
        />
        <SectionTitle v-bind:sectionTitle="'Hobbies'" />
        <ExperienceCard
          v-for="(item, i) in hobbyListItems"
          :key="i"
          :header="item.header"
          :time="item.time"
          :title="item.title"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";
import ImageCard from "@/components/ImageCard";

export default {
  name: "Home",

  components: {
    SectionTitle,
    ExperienceCard,
    ImageCard,
  },
  data: () => ({
    workListItems: [
      {
        header: "Ecraft Etima Oy",
        time: "04/2019 -",
        title: "Software Developer",
        isExpandable: true,
        description:
          "Working as a software developer in a development team. Duties include but are not limited to - Programming progressive web applications in all stack layers, emphasis on front-end - Participating in project scope definition - Actively participating in customer interaction - Utilizing agile methods in project / development work execution - Etc.",
      },
      {
        header: "Wärtsilä Oyj",
        time: "05/2014 - 03/2019",
        title: "Solution Expert PDM/PLM",
        isExpandable: true,
        description:
          "PDM/PLM related duties at Wärtsilä Information Management. I worked in the Engineering Services team in Wärtsilä's Information Management. Our team provided Wärtsilä engineers with services such as PDM, CAD, reporting tools and product configurators. In my position I worked mainly in project delivery management to enhance the core platforms. I utilized my certified knowledge of IT Service Management to work with vendors and internal partners around the world to deliver quality software solutions, that enable better use of data, more efficient way of working and better integration between platforms. I also worked in close cooperation with offshore teams to ensure on my part the operational integrity of the core platforms for which our team provided services.",
      },
      {
        header: "ICT-Portti",
        time: "08/2013 - 11/2013",
        title: "Intern",
        isExpandable: true,
        description:
          "Internship in the ICT-Portti project cluster in Turku. My duties included: -Web design (HTML5, jQuery) -Graphic design",
      },
      {
        header: "Municipality of Lieto",
        time: "03/2012 - 06/2012",
        title: "Intern",
        isExpandable: true,
        description:
          "Internship in the data administration of the municipal office of Lieto in Southwestern Finland. My duties in this position included: -IT end-user support -Software installations",
      },
    ],
    schoolListItems: [
      {
        header: "University of Turku",
        time: "08/2018 -",
        title: "Software Engineering (MSc)",
        isExpandable: false,
      },
      {
        header: "Turku University of Applied Sciences",
        time: "08/2010 - 06/2014",
        title: "Bachelor of Engineering (IT)",
        isExpandable: false,
      },
      {
        header: "Rangsit University, Bangkok",
        time: "08/2012 - 12/2012",
        title: "Exchange",
        isExpandable: false,
      },
      {
        header: "Lieto Upper Secondary",
        time: "08/2005 - 12/2008",
        title: "Matriculation examination",
        isExpandable: false,
      },
    ],
    courseListItems: [
      {
        header: "Hardcore React Training",
        time: "12/2019 Fraktio",
      },
      {
        header: "ITIL 2011 Foundation",
        time: "04/2015 APMG-International",
        title: "Certificate ID 2000140060",
      },
      {
        header: "Teamcenter Datamodel and App Administration",
        time: "05/2016 Ideal PLM",
      },
      {
        header: "Leading virtual teams",
        time: "06/2016 Wärtsilä",
      },
    ],
    hobbyListItems: [
      {
        header: "Esports, mainly CS:GO",
      },
      {
        header: "Sneakers",
      },
      {
        header: "Movies, (metal) music and geeking around",
      },
      {
        header: "Computers & everything related",
      },
      {
        header: "Playing and collecting guitars",
      },
    ],
    projectListItems: [
      {
        header:
          "Master's thesis: Study of universal requirements for a platformized augmented reality solution for maintenance tasks in heavy industry",
        time: "08/2020 - 01/2021",
        description:
          "Study of universal requirements and industry maturity for an augmented reality platform for heavy industry maintenance use",
        isExpandable: true,
      },
      {
        header:
          "Bachelor's thesis: Development of augmented reality visualisation solutions",
        time: "03/2014 - 06/2014",
        description:
          "Developing an augmented reality visualisation application for construction industry use, research on the possibilities and the state-of-the-art of augmented reality",
        isExpandable: true,
      },
      {
        header: "Dungeon Escape - Museum interaction improvement platform",
        time: "12/2013 - 03/2014",
        description:
          "Creating an interactive AR game environment to enhance visitor experience of museums and exhibitions",
        isExpandable: true,
      },
    ],
    imageListItems: [
      {
        header: "BalancedKD",
        description:
          "A web service for FaceIt Counter-Strike players to check their statistics and K/D with outliers removed",
        source: "balancedkd-pers-site.jpg",
        link: "https://balancedkd.com",
      },
      {
        header: "Matchroom Boss",
        description:
          "A tool for captains in Counter-Strike matchroom to help see team and player statistics per map, to help in map veto",
        source: "matchroomboss-pers-site.jpg",
        link: "https://matchroomboss.com",
      },
    ],
  }),
};
</script>

<style scoped>
.container {
  max-width: 900px !important;
}
.header-icon {
  color: #e74c3c;
}
.experience-card {
  margin-bottom: 0.5rem;
  box-shadow: 10px 10px 5px -10px rgba(108, 117, 125, 0.15) !important;
}
a:hover {
  color: #e74c3c;
}
</style>
