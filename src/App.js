import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedPost from './post/components/FeaturedPost';
import {useHttpClient} from './shared/hooks/http-hook';
import PostsSlider from './post/components/PostsSlider';
import ErrorModal from './shared/components/UIElements/ErrorModal';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import Animation from './shared/components/UIElements/Animation';
import Cookies from 'universal-cookie';
import shapes from './shapes.json';
import scroll from './scroll.json';
import Modal from './shared/components/UIElements/Modal';
import Button from './shared/components/FormElements/Button';
import Footer from './shared/components/UIElements/Footer';

import { CSSTransition } from 'react-transition-group';
const scrollToRef = (ref) => window.scrollTo({
  left:0,
  top:ref.current.offsetTop - 50,
  behavior:"smooth"
}) 

function App() {
  const {isLoading, clearError, error, sendRequest} = useHttpClient();
  const [featuredPost, setFeaturedPost] = React.useState();
  const [isCookies, setIsCookies] = React.useState();

 
const acceptCookies = () => {
  const cookies = new Cookies();
  cookies.set('MIO-WEB', {accept: true}, { path: '/' });
  setIsCookies(true);
}

React.useEffect(()=>{
  window.scrollTo(0,0);
const getCookies = () => {
  const cookies = new Cookies();
  let myCookies = cookies.get('MIO-WEB');
  if(!myCookies){
    setIsCookies(false)
  }else{
    setIsCookies(true)
  }
  

}

getCookies()
},[])

  const [loadedPosts, setLoadedPosts] = React.useState();
  const myRef = React.useRef(null)

  const [text, setText] = React.useState("")
const [fullText, setFullText] = React.useState(
    "Discover a Blog."
  )
const [index, setIndex] = React.useState(0)

React.useEffect(()=>{
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 180)
    }
  },[index, text,fullText]); 

  React.useEffect(()=>{
  
    const fetchData = async () => {
  
        try{
            const responsePosts = await sendRequest('https://ai-blog-api.herokuapp.com/api/posts');
            const filteredPosts = responsePosts.posts.filter(p => p.category.title === "Published").reverse();
            setLoadedPosts(filteredPosts);
            setFeaturedPost(filteredPosts[0]);
        }catch(err){
                console.log(err)
        }
    };
    fetchData();
},[sendRequest]); 

  const slideHandler = event => {
    const postId = event.target.id;
    const pickedPost = loadedPosts.find(p => p.id === postId);
    console.log(postId)
    setFeaturedPost(pickedPost);
    scrollToRef(myRef)
  }
const executeScroll = () => {
  scrollToRef(myRef)
}

  return (<React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {isLoading && <LoadingSpinner asOverlay />}
    <Modal
      show={!isCookies}
            header="Cookies are the best!"
            
            footerClass="cookies__modal-actions"
            footer={
                <React.Fragment>
                    <Button inverse onClick={acceptCookies}>Allow only required</Button>
                    <Button onClick={acceptCookies}>Allow Cookies</Button>
                </React.Fragment>
            }
        >   
        
        <p style={{color: 'white'}}>
        Welcome to our website! We use cookies to ensure that we give you the best experience on our website. By continuing to browse the site, you are agreeing to our use of cookies. <br /> 
        <a href="https://www.miomideal.com/datenschutz" target="_blank" rel="noreferrer" >Cookies policy</a>
        </p>
        </Modal>
    <div className="App">
      <header id="HEAD" className="App-header" onClick={executeScroll}>
      <CSSTransition
                    in={!isLoading}
                    timeout={2000}
                    classNames="fade"
                    unmountOnExit
                >
      
        <img src={logo} width={150} alt="logo" />
        </CSSTransition>
        <h2 style={{color:"#FF2E4C"}}>
        {text}
        </h2>
        <CSSTransition
                    in={text.length === fullText.length}
                    timeout={3000}
                    classNames="slide"
                    unmountOnExit
                >
                   <p>Written by AI.</p>
                </CSSTransition>
                <CSSTransition
                    in={text.length === fullText.length}
                    timeout={3000}
                    classNames="slide"
                    unmountOnExit
                >
        <Animation data={scroll} height={280} />

                </CSSTransition>
      </header>
      <main>
        <div ref={myRef} className="posts-wrapper">
        {featuredPost && <FeaturedPost item={featuredPost} />}
        </div>
        <div className="posts-wrapper">
          <div className="info-container">
            <div><Animation speed={0.2} data={shapes} /></div>
            <div>
              <h2>Did you know?</h2>
              <p>The rise of AI has seen a corresponding increase in the use of AI to write blog posts. While this can be seen as a positive development – after all, AI can help to improve the quality of writing and make it more engaging – there is a darker side to this trend.</p>
              <p>As AI increasingly relies on big data to learn and improve its writing, there is a risk that companies and individuals will use this data to manipulate people. For example, imagine a company that sells fitness products. They could use AI to study the blog posts of people who are interested in health and fitness, and then use this data to target these individuals with ads for their products.</p>

              <p>While there is nothing inherently wrong with this, it does raise some ethical concerns. Firstly, it is important to consider the consent of the people who are being targeted. Secondly, there is a risk that this kind of AI-based marketing could be used to exploit people's insecurities. For example, a person who is struggling to lose weight may be targeted with ads for products that promise quick and easy results.</p>
              <p>It is important to be aware of these risks when using AI to write blog posts. While AI can be a powerful tool, it is important to use it responsibly and to respect the privacy of the people who are being targeted.</p>

              </div>
          </div>
        </div>
        <div className="posts-wrapper">
        {loadedPosts && <PostsSlider onClick={slideHandler} items={loadedPosts.filter(p => p.id !== featuredPost.id)} />}
        </div>
      </main>
     <Footer />
    </div>

    </React.Fragment>
  );
}

export default App;
