import { useEffect } from "react";

import Header from "../../component/header/header";
function Main() {

  useEffect(() => {
    const handleScroll = (evt: Event) => {
      // console.log('window.scrollY', window.scrollY);
      const window = evt.currentTarget as Window
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <Header />
      <div className="main-content">
        <section className="top-images">
          <div className="title-container">
            <h2 className="sub-main-title">Sub Main Title</h2>
            <h2 className="main-title-page">Title Pages</h2>
          </div>
          <div className="layer layer-back-page"></div>
          <div className="layer layer-center-page"></div>
          <div className="layer layer-page-front"></div >
        </section >
      </div>
      <article className="main-sub-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor facere repellat soluta voluptatum expedita tenetur corrupti ad! Aperiam, quo! Culpa, quia quasi blanditiis nostrum quidem debitis dolore voluptatem aliquam.
          Eum deleniti facere aliquam tempora rem impedit amet modi voluptatum aliquid, vitae fugit ipsa, placeat omnis dolorem neque voluptas dolores labore error? Nostrum, et veritatis exercitationem magnam labore molestiae pariatur?
          Ea asperiores impedit cum, esse eligendi eius, delectus alias repellendus magnam consequuntur eum quibusdam, voluptates facere nisi ab voluptas architecto. Error atque accusamus unde officiis porro voluptate quo facilis laborum?
          Quidem suscipit error maiores, obcaecati facilis tenetur a numquam doloremque, quasi laudantium odio perspiciatis delectus nam placeat consectetur commodi qui fugiat assumenda molestias ipsum. At cum atque incidunt labore voluptatum?
          Voluptatum sequi ex consectetur nam repudiandae, natus suscipit, earum accusantium aut, unde dolore aspernatur voluptatem! Dicta vero perferendis enim dolores eligendi modi harum quasi, possimus unde, maxime magni cupiditate quis.
          Itaque et neque voluptate minima pariatur aliquam at quaerat aut, esse odio necessitatibus reprehenderit alias consequatur nesciunt repellendus ex rerum quae quos doloribus nostrum fugit libero fugiat quis officia! Minima!
          Quae sed rem, placeat sapiente, suscipit voluptates quasi molestias corrupti ipsum odio officia asperiores consequatur adipisci similique, labore incidunt. Veniam, unde laudantium? Neque at soluta totam nihil dolore ullam beatae.
          Reiciendis ipsa perferendis ratione, adipisci debitis dicta itaque, eum voluptates laborum praesentium ipsam, repellat aspernatur reprehenderit cum illum nisi ex ut eos amet! Distinctio architecto amet ab mollitia, totam soluta.
          Consectetur, mollitia. Provident et explicabo dignissimos possimus eius dolorem ducimus laudantium assumenda amet quos est reprehenderit quis nisi tempore, dolore, quaerat nemo facilis impedit. Sapiente at pariatur unde itaque perferendis?
          Natus iusto tempora laudantium necessitatibus, eveniet earum vero aliquid eaque quo iste perspiciatis obcaecati provident! Ipsam libero, accusamus id, ullam, alias maiores voluptatum aliquam voluptates sint impedit explicabo neque aperiam.
          Quis at hic iure nisi eligendi beatae, non laudantium facere, molestias nemo impedit omnis fugiat necessitatibus excepturi ex reprehenderit voluptate qui explicabo vitae corporis sapiente, culpa sed aliquam tenetur. Earum!
          Numquam, exercitationem deleniti enim incidunt magni suscipit blanditiis quasi facilis quidem officiis aspernatur quae quo maxime autem culpa eveniet nemo beatae similique earum iure, illo provident adipisci. Unde, quidem odio?
          Possimus, consequatur eaque esse consectetur tempora aliquid in impedit voluptate iste, vel quidem maiores corrupti exercitationem id suscipit cum ipsa sequi autem numquam, debitis vero ea reprehenderit quibusdam? Quisquam, id?
          Deleniti placeat explicabo nihil sapiente vero non cupiditate saepe quidem quo assumenda dolorem dolor libero corporis, aspernatur asperiores itaque voluptatem voluptatum laudantium ipsam. Ullam fugiat soluta similique ex neque molestiae?
          Cumque repellat nemo eum perspiciatis sint laudantium, odit cupiditate nobis sit ipsam velit. Autem libero, corrupti amet aliquam eos quo ut vel expedita esse veniam ipsam ullam alias eaque sunt.</p>
      </article>
    </>
  );
}

export default Main;
