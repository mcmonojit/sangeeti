import React, { useState } from "react";
import "./styles.css";

const evergreenClassics = [
  {
    name: "Badan pe sitare",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=J5oR8p86FQw&list=RDAMVMJ5oR8p86FQw",
    img:
      "https://raag.fm/image/250/2899360/Superstar-Shammi-Kapoor-Mohammed-Rafi.jpg"
  },
  {
    name: "Zindagi ek safar hai suhana",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=KgyOAgq7EvE&list=RDAMVMKgyOAgq7EvE",
    img: "https://raag.fm/image/250/1019594/Andaz-.jpg"
  },
  {
    name: "Mere samne wali khidki mein",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=6RchbVJpJRI&list=RDAMVM6RchbVJpJRI",
    img:
      "https://m.media-amazon.com/images/I/51WuJJpPLiL._UX250_FMjpg_QL85_.jpg"
  },
  {
    name: "Mera joota hai japani",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=iVx7za1WEgw&list=RDAMVMiVx7za1WEgw",
    img: "https://raag.fm/image/250/3180749/Awara-Hoon-Mukesh.jpg"
  },
  {
    name: "Mere sapnon ki rani",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=UUMoHjsbV1s&list=RDAMVMiVx7za1WEgw",
    img: "https://www.filmmusicsite.com/images/covers/normal/50965-2.jpg"
  }
];

const love = [
  {
    name: "Soch na sake",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=hp02FwlpQYU&list=RDAMVMhp02FwlpQYU",
    img:
      "https://raag.fm/image/250/1840237/Love-Dose-:-Arijit-Singh-Arijit-Singh.jpg"
  },
  {
    name: "Ek ajnabi haseena se",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=MlCeGfgPSvQ&list=RDCLAK5uy_nLOvZAnN86K4f-fJ6tUi0xHUPBHLBBkVE",
    img:
      "https://raag.fm/image/250/1213419/Evergreen---Rajesh-Khanna-Kishore-Kumar.jpg"
  },
  {
    name: "Ishq wala love",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=mUisIKGTkVw&list=RDAMVMmUisIKGTkVw",
    img:
      "https://raag.fm/image/250/1148059/My-1-Love-Salim-Merchant,Neeti-Mohan.jpg"
  },
  {
    name: "Tujhe dekha to ye jaana sanam",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=m34MxSEgnyk&list=RDAMVMm34MxSEgnyk",
    img:
      "https://raag.fm/image/250/1222426/Tujhe-Dekha-To-Ye-Jaana-Sanam-Lata-Mangeshkar,Kumar-Sanu.jpg"
  },
  {
    name: "Baarish",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=CrL3h1Bq0Iw&list=RDAMVMCrL3h1Bq0Iw",
    img:
      "https://raag.fm/image/250/1147457/Yaariyan-Mohammed-Irfan,Gajendra-Verma.jpg"
  }
];

const soulful = [
  {
    name: "Choo lo",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=1puGzGe_mfU&list=RDAMVM1puGzGe_mfU",
    img:
      "https://m.media-amazon.com/images/I/41+AwljEDzL._UX250_FMjpg_QL85_.jpg"
  },
  {
    name: "Fursat",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=dSzMdViHbSk&list=RDAMVMdSzMdViHbSk",
    img: "https://raag.fm/image/250/1976459/Fursat-Arjun-Kanungo.jpg"
  },
  {
    name: "Ik kahani hai",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=7LuUWKKt3TA&list=RDAMVM7LuUWKKt3TA",
    img:
      "https://www.celebrityborn.com/admin/assets/images/people/gajendra_verma_625.jpg"
  },
  {
    name: "Haaye oye",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=Gvrl3LALMJA&list=RDAMVMdSzMdViHbSk",
    img: "https://www.pagalworld.us/_big/haaye-oye-qaran-250.jpg"
  },
  {
    name: "Tere bina",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=41aFReksDAI&list=RDAMVMdSzMdViHbSk",
    img: "https://raag.fm/image/250/16133/Tere-Bina-Zaeden.jpg"
  }
];

const bollywoodhits = [
  {
    name: "Khuda jaane",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=aG7MaqtWxT8&list=RDAMVMmUisIKGTkVw",
    img:
      "https://raag.fm/image/250/1150370/YRF-Valentine-Fest---The-Greatest-Love-Songs-Vol---2-KK,Shilpa-Rao.jpg"
  },
  {
    name: "Ik vaari aa",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=vL14wk2cj6U&list=RDAMVMvL14wk2cj6U",
    img: "https://www.pagalworld.us/_big/raabta-2017-250.jpg"
  },
  {
    name: "The breakup song",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=AJL_aVxqMEc&list=RDAMVMAJL_aVxqMEc",
    img: "https://desinode.com/storage/images/250/1315.jpg"
  },
  {
    name: "Shubhaarambh",
    rating: "9/10",
    link:
      "https://music.youtube.com/watch?v=IC29Um1VTxo&list=RDAMVMIC29Um1VTxo",
    img:
      "https://raag.fm/image/250/1121807/Kai-Po-Che-Shruti-Pathak,Divya-Kumar.jpg"
  },
  {
    name: "Radha",
    rating: "8/10",
    link:
      "https://music.youtube.com/watch?v=W_076ZN_n7A&list=RDAMVMW_076ZN_n7A",
    img:
      "https://images.desimartini.com/media/versions/uploads/2015-5/cover_image/720abd3e-dde5-40a2-bbf5-2e854098da1d_gallery_image_250_250.jpeg"
  }
];

export default function App() {
  var [currentList, setCurrentList] = useState(evergreenClassics);

  function choiceClickHandler(event) {
    var choice = event.target.innerText;

    switch (choice) {
      case "Evergreen classics":
        setCurrentList(evergreenClassics);
        break;
      case "Soulful":
        setCurrentList(soulful);
        break;
      case "Love":
        setCurrentList(love);
        break;
      case "Bollywood hits":
        setCurrentList(bollywoodhits);
        break;
      default:
        setCurrentList(evergreenClassics);
        break;
    }
  }
  return (
    <div className="App">
      <h1 style={{ padding: "1.5rem 0rem 0.2rem 0rem" }}>~\\ Sangeeti \\~</h1>
      <small>Click on a genre to get our music recomendations</small>

      <hr className="hr" />

      <div className="containerCenter">
        <div className="btnContainer">
          <button className="btn" onClick={choiceClickHandler}>
            Evergreen classics
          </button>
          <button className="btn" onClick={choiceClickHandler}>
            Soulful
          </button>
          <button className="btn" onClick={choiceClickHandler}>
            Love
          </button>
          <button className="btn" onClick={choiceClickHandler}>
            Bollywood hits
          </button>
        </div>

        <div className="listContainer">
          <ul className="list">
            {currentList.map((item) => {
              return (
                <li className="listitemContainer" key={item.name}>
                  <div>
                    <img alt="" className="itemimg" src={item.img} />
                  </div>

                  <div className="item-name">{item.name}</div>
                  <div className="rating">Ratings: {item.rating}</div>
                  <div className="linkContainer">
                    <a className="link" href={item.link} target="__blank__">
                      Play now
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <footer>
        <h3>Made by Monojit Chakraborty</h3>
      </footer>
    </div>
  );
}
