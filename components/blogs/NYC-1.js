const NYCBlogOne = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'start', justifyContent: 'start' }}>
            <div style={{ maxWidth: '50%', padding: '20px' }}>
                <div className="bg-black">
                <h1>Title of the Article</h1>
                </div>
                <p>
                Right now it's a pain in the ass... I have been out of college for 6 months now and have applied for well over a thousand jobs.
                I'm doing my best to get a great job in software. All I need is one chance to prove my worth. I love what I do and I don't mean to toot my own horn but I am great at what I do.

                </p>

                <p>
                    In the meantime I have worked at an arcade fixing all the different games, working for $16/hour. I was miserable. I quit my job and moved into freelance web development.
                    Ever since I did this I have been so much happier with my life. I have earned so much and I am actually contributing to my future career!
                    I have learned that I can make mobile apps using the React Expo frameeork and API. 
                    Though I haven't secured a client yet, I have been working daily to reach out to companies and make a difference.
                </p>
                {/* Add more content as needed */}
            </div>
        </div>
    );
}

export default NYCBlogOne;
