const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Fed 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Metting at School',
        day: 'Fed 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Fed 5th at 5:30pm',
        reminder: false,
    }
]

export const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}
