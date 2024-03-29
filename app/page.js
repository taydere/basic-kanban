import Image from 'next/image'

//javascript if statment to fill p tags?

export default function Home() {

  const mondayTasks = [
    {"name" : " Math Memory Palace: Arithmetic 1", "uri" : "https://docs.google.com/document/d/1eXKq5dl_kuTmmzN8T99zE2Zf1rAuzceC/edit" },
    {"name" : " Math: Problems", "uri" : "https://docs.google.com/document/d/1byLA7D8jpQAtnOu8pB9ljoimzwLcycWKtrMQn2oc-IU/edit"},
    {"name" : " Math: Notes", "uri" : "https://docs.google.com/document/d/1eXKq5dl_kuTmmzN8T99zE2Zf1rAuzceC/edit"},
    {"name" : " Computer Science Memory Palace: Networking", "uri" : "https://docs.google.com/document/d/19PiWk4DMLC_bZxX0HgQEujtyTAm-dKkCnONp8gDH2JM/edit"},
    {"name" : " Science Memory Palace: Languages", "uri" : "https://docs.google.com/document/d/19PiWk4DMLC_bZxX0HgQEujtyTAm-dKkCnONp8gDH2JM/edit"},
    {"name" : " Science Memory Palace: Tools", "uri" : "https://docs.google.com/document/d/19PiWk4DMLC_bZxX0HgQEujtyTAm-dKkCnONp8gDH2JM/edit"},
    {"name" : " Science Memory Palace: Fundamentals", "uri" : "https://docs.google.com/document/d/19PiWk4DMLC_bZxX0HgQEujtyTAm-dKkCnONp8gDH2JM/edit"},
    {"name" : " Science Memory Palace: Notes Application Spread to tools/fundamentals/language", "uri" : "https://docs.google.com/document/d/19PiWk4DMLC_bZxX0HgQEujtyTAm-dKkCnONp8gDH2JM/edit"},   
    {"name" : " Computer Science: Project", "uri" : "https://docs.google.com/document/d/1Eo8WiDlX3LlcOegjMm4yaaPWApnuHowwUUt-ZUmVyh4/edit"},   
    {"name" : " Business Process: Notes", "uri" : "https://docs.google.com/document/d/1OsyvxBWnirho7LQRtVxh8Z15z4G4TWZVPqy9kpcWy4o/edit"},   
    {"name" : " Business Memory Palace", "uri" : "https://docs.google.com/document/d/1OsyvxBWnirho7LQRtVxh8Z15z4G4TWZVPqy9kpcWy4o/edit"},       
    ]

  const tuesdayTasks = [
    ' Math Memory Palace: Arithmetic 2',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Networking',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application Spread to tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business Process: Notes',
    ' Business Process: Memory Palace',
      
    ]
   
  const wednesdayTasks = [
    ' Math Memory Palace: Algebra 1',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: OS',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application Spread to tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business Process: Notes',
    ' Business Process: Memory Palace',
      
    ]
  
  const thursdayTasks = [
    ' Math Memory Palace: Algebra 2',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: OS',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application Spread to tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business Process: Notes',
    ' Business Process: Memory Palace',
        
    ]

  const fridayTasks = [
    ' Math Memory Palace: Precalculus 1',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application Spread to tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business Process: Notes',
    ' Business Process: Memory Palace',
      
    ]
        
  const saturdayTasks = [
    ' Math Memory Palace: Precalculus 2',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Fundamentals, Networking, OS from book',
    ' Computer Science: Project',
    ' Business Process: Notes',
    ' Business Process: Memory Palace',
      
    ]

  const sundayTasks = [
    {"name" : "Math Memory Palace: Calculus", "uri" : "https://docs.google.com/document/d/1eXKq5dl_kuTmmzN8T99zE2Zf1rAuzceC/edit"},
    {"name" : "Math: Problems", "uri" : "https://docs.google.com/document/d/1Eo8WiDlX3LlcOegjMm4yaaPWApnuHowwUUt-ZUmVyh4/edit"},
    {"name" : "Math: Notes", "uri" : "https://docs.google.com/document/d/1Eo8WiDlX3LlcOegjMm4yaaPWApnuHowwUUt-ZUmVyh4/edit"},
    //' Computer Science Memory Palace: Languages',
    //' Computer Science Memory Palace: Tools',
    //' Computer Science Memory Palace: Fundamentals',
    //' Computer Science: Notes Application tools/fundamentals/language',
    //' Computer Science: Project',
    //' Business Process: Notes',
    //' Business Process: Memory Palace',
    ]
      
      return (

        <div>
          <a href="https://basic-kanban-fawn.vercel.app/monday">Monday</a>
          <div><a href="https://basic-kanban-fawn.vercel.app/tuesday"> Tuesday</a></div>
          <div><a href="https://basic-kanban-fawn.vercel.app/wednesday"> Wednesday</a></div>
          <div><a href="https://basic-kanban-fawn.vercel.app/thursday"> Thursday</a></div>
          <div><a href="https://basic-kanban-fawn.vercel.app/friday"> Friday</a></div>
          <div><a href="https://basic-kanban-fawn.vercel.app/saturday"> Saturday</a></div>
          <div><a href="https://basic-kanban-fawn.vercel.app/sunday"> Sunday</a></div>
        </div>
       
      )

}
