import { useEffect } from "react";
import { animateScroll } from 'react-scroll';

import Header from "../../component/header/header";
function Main() {

  useEffect(() => {
    const handleScroll = (evt: Event) => {
      const window = evt.currentTarget as Window
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (

    <div className="main-wrapper" onScroll={() => {
      animateScroll.getAnimationType({ smooth: true })
    }}>
      <Header />
      <div className="main-content">
        <section className="top-images">
          <div className="title-container">
            <h2 className="title-content sub-main-title">Sub Main Title</h2>
            <h2 className="title-content main-title-page">Title Pages</h2>
          </div>
          <div className="layer layer-back-page"></div>
          <div className="layer layer-center-page"></div>
          <div className="layer layer-page-front"></div >
        </section >
      </div>
      <article className="main-sub-content-page-1">
        <div className="sub-title-container">
          <h2 className="sub-title-content">Sub Title Content</h2>
          <p className="sub-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque expedita nisi repellendus soluta unde, voluptates! Laborum molestiae nemo omnis quae suscipit vero voluptatem. Exercitationem expedita quo sunt ullam velit.</p>
        </div>
        <div className="sub-content-frame"></div>
        <div className="sub-content-bottom-forest"></div>
      </article>
      <article className="main-sub-content-page-2">
        <div className="sub-content-page-2-images">
        </div>
      </article>
    </div>

  );
}

export default Main;
