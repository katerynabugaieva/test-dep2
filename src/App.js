import logo from './logo.svg';
import './App.css';
import { Chip, Grid } from "@mui/material"

function App() {
  const skills = ["Compassionate",
    "Attentive",
    "Empathetic",
    "Calming",
    "Intuitive",
    "Responsive",
    "Comforting",
    "Gentle",
    "Trustworthy",
    "Patient"]

  const employment = [{
    name: "Private Residence",
    position: "A good boy",
    date: "Oct 2020 - present",
    description: "Provided emotional support and companionship to an individual experiencing anxiety and depression on a daily basis.Implemented calming techniques and remained available for comfort during periods of distress."

  }, {
    name: "Mental Health Clinic",
    date: "Jul 2020 - Oct 2020",
    position: "A good boy",
    description: "Collaborated with mental health professionals to assist clients during therapy sessions.Offered a soothing presence and facilitated emotional regulation for individuals with various mental health challenges."

  }, {
    name: "University Counseling Center",
    date: "Jun 20219 - Jul 2020",
    position: "A good boy",
    description: "Offered support and comfort to students dealing with stress, homesickness, and academic pressure.Participated in therapy sessions and campus events aimed at promoting emotional well - being and stress management."
  }]


  return (<>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src="./avatar.png" width="100px" />
      </Grid>
      <Grid item xs={8}>
        <h1>Otto</h1>
        <h3>emotional.support</h3>
        <h4>Dedicated Emotional Support Animal offering unwavering companionship and comfort to individuals experiencing emotional or psychological distress.</h4>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h5>Skills</h5>
        {skills.map((skill, key) => <Chip label={skill} key={key} />)}
      </Grid>
      <Grid item xs={8}>
        <h5>Employment history</h5>
        {employment.map((job, key) => {
          return (
            <Grid container spacing={2} key={key}>
              <Grid item xs={6}>
                {job.name}
              </Grid>
              <Grid item xs={6}>
                {job.position}
              </Grid>
            </Grid>
          )

          //<Job job={job} key={key} /> 
        })}
      </Grid>
    </Grid>
  </>
  );
}

export default App;
