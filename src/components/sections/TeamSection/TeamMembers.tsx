import TeamCard from "./TeamCard";

const membersData = [
  {
    img:"/teams/michael-anderson.jpg",
    name:"Michael Anderson",
    title:"Founder & General Contractor",
    url:"/",
  },
  {
    img:"/teams/david-wilson.jpg",
    name:"David Wilson",
    title:"Senior Construction Specialis",
    url:"/",
  },
  {
    img:"/teams/sarah-mitchell.jpg",
    name:"Sarah Mitchell",
    title:"Project Manager",
    url:"/",
  },
]


export default function TeamMembers() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        membersData.map((member,idx)=>(
          <TeamCard key={idx} memberDetails={member}/>
        ))
      }
    </div>
  );
}