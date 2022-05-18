import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentEmail = { email: email }

        if (email) {
            fetch(`https://nameless-headland-38045.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentEmail)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken)
                })
        }

    }, [user])
    return [token];
}

export default useToken