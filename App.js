import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = "adf974dd-9e3e-43b8-9d94-d74bab22de06";

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (

        <ChatEngine
        
            // height = "100vh"
            // projectID = "adf974dd-9e3e-43b8-9d94-d74bab22de06"
            // userName = "AryanSaini"
            // userSecret = "12345"
            // renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}

            // height = "100vh"
            // projectID = "adf974dd-9e3e-43b8-9d94-d74bab22de06"
            // userName = "Sam"
            // userSecret = "54321"
            // renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
          />

    );

}

export default App;