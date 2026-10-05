type user = {
    user: string,
    role: string
}
export const Greeting = () => {
    const userInfo: user = {
        user: "prit",
        role: "admin"
    }
    return (
        <>
            <UserGreeting {...userInfo} />
        </>
    )
}

export const UserGreeting = (props: user) => {
    const { user, role } = props;
    return (
        <>
            Greetings! {user}
            <div> your Role is {role}</div>
        </>
    )
}
