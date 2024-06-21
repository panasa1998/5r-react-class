import "./card.css"
const iplTeams=[
    {
        teamName:"SRH",
        teamCaptain:"Pat Cummins",
        matchesWon:10,
        teamLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hAKgBdslW2vA6mCf709w-6lSKYBgGKcXrA&s"
    },
    {
        teamName:"CSK",
        teamCaptain:"Ruthraj Gaikwad",
        matchesWon:8,
        teamLogo:"https://im.indiatimes.in/content/2024/Mar/HD-wallpaper-chennai-super-king-logo-chennai-super-king-logo-ipl_65fc1a450ff2e.jpg?w=720&h=1280&cc=1&webp=1&q=75"   
    },
    {
        teamName:"KKR",
        teamCaptain:"Shreyas Iyer",
        matchesWon:9,
        teamLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3kN8mkyVxsgoLLdt0nLqbVHjkRpCd2CNUA&s"   
    },
    {
        teamName:"RCB",
        teamCaptain:"Faf du Plessis",
        matchesWon:5,
        teamLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrH7A5vWgL1PV_9TlEXPtH3KS8Sn8BNNyyA&s"   
    },
    {
        teamName:"DC",
        teamCaptain:"Rishab pant",
        matchesWon:4,
        teamLogo:"https://i2.wp.com/upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png?strip=all"   
    },
    {
        teamName:"LSG",
        teamCaptain:"KL Rahul",
        matchesWon:7,
        teamLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IfIjgUTwGSTbAryGwR7WjzBG41udvJIe4w&s"   
    },
    {
        teamName:"RR",
        teamCaptain:"Sanju Samson",
        matchesWon:8,
        teamLogo:"https://i.pinimg.com/originals/e2/94/64/e2946441d760920aca4a458c2e873ed9.png"   
    },
    {
        teamName:"KXIP",
        teamCaptain:"Shikar Dhawan",
        matchesWon:6,
        teamLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9y2_ypw96ncgLgV9xV5fdnKnuOzmryY8Pw&s"   
    },
    {
        teamName:"MI",
        teamCaptain:"Hardik Pandya",
        matchesWon:7,
        teamLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMF-K63OCJhZ6ng8Et2UtkRX9ghxZgfl2-g&s"   
    },
    {
        teamName:"GT",
        teamCaptain:"Subham Gill",
        matchesWon:4,
        teamLogo:"https://m.media-amazon.com/images/I/41vFvvmcJbL._AC_UF894,1000_QL80_.jpg"   
    },
    
];

function filteredData(iplTeams){
    const newData=iplTeams.filter(eachTeam=>eachTeam.matchesWon>1)
    return newData;
}

const Cricket=()=>{
    return(
       <>
       {filteredData(iplTeams).map((eachTeam)=>{
        return(
            <div className="crick">
                <img src={eachTeam.teamLogo} alt="{image}" height={100} width={100}/>
                <h2><b>Team Name:</b>{eachTeam.teamName}</h2>
                <h3><b>Team Captain:</b>{eachTeam.teamCaptain}</h3>
                <h4><b>Matches won:</b>{eachTeam.matchesWon}</h4>
            </div>
        )
       })}
       </>
    )

}
export default Cricket;