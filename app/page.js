import Image from 'next/image'

//javascript if statment to fill p tags?

export default function Home() {

  const isTrue = "false";

  const mondayTasks = [
    ' Math Memory Palace: Arithmetic 1',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Networking',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application Spread to tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
    
    ]

  const tuesdayTasks = [
    ' Math Memory Palace: Arithmetic 2',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
      
    ]
   
  const wednesdayTasks = [
    ' Math Memory Palace: Algebra 1',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
      
    ]
  
  const thursdayTasks = [
    ' Math Memory Palace: Algebra 2',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
        
    ]

  const fridayTasks = [
    ' Math Memory Palace: Precalculus 1',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
      
    ]
        
  const saturdayTasks = [
    ' Math Memory Palace: Precalculus 2',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
      
    ]

  const sundayTasks = [
    ' Math Memory Palace: Calculus',
    ' Math: Problems',
    ' Math: Notes',
    ' Computer Science Memory Palace: Languages',
    ' Computer Science Memory Palace: Tools',
    ' Computer Science Memory Palace: Fundamentals',
    ' Computer Science: Notes Application tools/fundamentals/language',
    ' Computer Science: Project',
    ' Business',
      
    ]
  
  const lin = "https://docs.google.com/document/d/1Eo8WiDlX3LlcOegjMm4yaaPWApnuHowwUUt-ZUmVyh4/edit"

  if(isTrue == "true"){
    const listitems = mondayTasks.map(person =>
      
      <li><a href={lin}><input type = "checkbox" />{person}</a></li>

      );
  }
  const listitems = tuesdayTasks.map(person =>
      
    <li><a href={lin}><input type = "checkbox" />{person}</a></li>

    );
  
  return (

    <ul>{listitems}</ul>
   
  )

 
}
