const userservice = async () => {
  return "Bhuvi";
};

let actors = [
  { id: 1, name: "vijay", nick: "thalapathi", movie: "gilli" },
  { id: 2, name: "surya", nick: "singam", movie: "unai ninaithu" },
  { id: 3, name: "simbu", nick: "str", movie: "vallavan" },
  { id: 4, name: "pradeep ranganathan", nick: "pr", movie: "dragon" },
];

const actorservice = async (id) => {

  let a = actors?.filter((keys) => 

    parseInt( keys?.id) === parseInt(id)

  );
  return a;
};

let veggies=[]
  
const vegservice = async (b) =>{
    const c=b?.forEach((keys)=>{
       veggies.push(keys)
    })
    
return veggies
 
}
export default  { userservice, actorservice,vegservice };
