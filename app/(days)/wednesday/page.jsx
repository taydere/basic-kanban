import React from 'react'

const page = () => {
  
    const wednesdayTasks = [
        {"name" : " Math Memory Palace: Algebra 1", "uri" : "https://docs.google.com/document/d/1yrnAzGPb7h-F-4hQCKnt5_gwn7_R0uulNSCRouHMnhk/edit" },
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

        const listitems = wednesdayTasks.map(person =>
      
            <li><a href={person.uri}><input type = "checkbox" />{person.name}</a></li>
      
            );
      
            return (
              <div>
                  <h1>Wednesday</h1>
                  <ul>{listitems}</ul>
              </div>
             
            )
}

export default page