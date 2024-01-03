const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
  }
  
  const Header = ({ course }) => {
    return <h2>{course}</h2>
  }
  
  const Total = ({ parts }) => {
    const sumOfExercises = parts.map(part => part.exercises).reduce((accumulator, exercises) => accumulator + exercises, 0)
    return <p><b>total {sumOfExercises} of exercises</b></p>
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    
    return (
      <div>
        {parts.map(part => (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )
        )}
        <Total parts={parts} />
      </div>
    )
  }
  
export default Course