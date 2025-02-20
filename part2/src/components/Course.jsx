const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(value => <Part key={value.id} part={value.name} exercises={value.exercises}/>)
      }
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Total = ({ parts }) => {
  return (
    parts.map(value => value.exercises).reduce((a, b) => a + b, 0)
  )
}

const Course = ({ course }) => {
return (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <p>Total of <Total parts={course.parts} /> exercises</p>
  </div>
)
}

export default Course