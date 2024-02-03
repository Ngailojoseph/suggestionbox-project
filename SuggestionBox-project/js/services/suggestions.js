app.factory('suggestions', function(){
    var demoSuggestions = {
        posts: [
        {
            id: 1,
            title: 'Have bi-weekly meetings to discuss cases',
            upvotes: 9,
            comments: [
                {
                    body: 'As long as they are not too long!',
                    upvotes: 33
                },
                {
                    body: "I'm too lazyyyy",
                    upvotes: 103
                },
                {
                    body: 'sure..',
                    upvotes: 2
                }
            ]
        },
        {
            id: 2,
            title: 'Bring up case studies to discuss during meetings',
            upvotes: 15,
            comments: [
                {
                    body: 'Make sure people make a summary before coming in.',
                    upvotes: 12
                },
                {
                    body: "Sounds good",
                    upvotes: 2
                }
            ]
        },
        {
            id: 3,
            title: 'Have brainstorming sessions about programs',
            upvotes: 3,
            comments: [
                {
                    body: 'I love this idea!',
                    upvotes: 3
                }
            ]
        },
        {
            id: 4,
            title: 'Role play as training sessions evolve',
            upvotes: 7,
            comments: [
                {
                    body: 'We need materials for this.',
                    upvotes: 5
                },
                {
                    body: "WOHOO",
                    upvotes: 23
                }
            ]
        }
        ]    
    };
    return demoSuggestions;    
});