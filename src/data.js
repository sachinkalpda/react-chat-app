const loggedInUser = {
    id : 100,
    name : 'John',
    conversations : [
        {
            id : 101,
            name : 'Peter',
            room : '100-101',
            lastMessage : 'Hello',
            lastMessageTime : 1686813102399
        }
    ]
}


const users = [
    {
        id : 100,
        name : 'John',
        conversations : [
            {
                id : 101,
                name : 'Peter',
                room : '100-101',
                lastMessage : 'Hello'
            }
        ]
    },
    {
        id : 101,
        name : 'Peter',
        conversations : [
            {
                id : 100,
                name : 'John',
                room : '100-101'
            }
        ]
    },
    {
        id : 102,
        name : 'Robert',
        conversations : [],
    },
    {
        id : 103,
        name : 'Billy',
        conversations : []
    },
    {
        id : 104,
        name : 'Justin',
        conversations : []
    },
    {
        id : 105,
        name : 'Rio',
        conversations : []
    },
    {
        id : 106,
        name : 'Jack',
        conversations : []
    },
    {
        id : 107,
        name : 'Andrews',
        conversations : []
    },
    {
        id : 108,
        name : 'Lawerence',
        conversations : []
    },
    {
        id : 109,
        name : 'Harry',
        conversations : []
    },
    {
        id : 110,
        name : 'Tim',
        conversations : []
    }



];

const chats = [
    {
        id: 1000,
        message : 'Hii',
        room : '100-101',
        sender : {
            id : 100,
            name : 'John'
        },
        reciever : {
            id : 101,
            name : 'Peter'
        },
    },
    {
        id:1001,
        message : 'Hello',
        room : '100-101',
        sender : {
            id : 101,
            name : 'Peter'
        },
        reciever : {
            id : 100,
            name : 'John'
        },
    },

]


export {
    users,chats,loggedInUser
}