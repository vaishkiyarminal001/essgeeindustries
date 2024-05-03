import React, { useEffect, useRef } from 'react';
import video1 from "../../video/adhare1.mp4";
import { HomeSlider } from './HomeSlider';
import { Client } from './Client';
import "./HomeScreen.css";
import { useNavigate } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContextProvide';
import { useContext } from 'react';

export const HomeScreen = () => {

  const {lang} = useContext(MyAuthContext);
  console.log(lang);
  const navigate = useNavigate();

  const videoRef = useRef(null);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 3000); // Change video every 3 seconds
  
      return () => clearInterval(intervalId);
    }, []);


    // japanese language

    if(lang){
      return (
        <div>

         <div className="video-container">
      <video ref={videoRef} autoPlay muted loop>
        <source src={video1} type="video/mp4" />
      </video>
    </div>

    <div style={{ width: '100%' }}>

      {/* product */}

      <h2 style={{paddingTop:'1%'}}>私たちの商品</h2>
      <div className='productImageCont'>
        <div>
        <img src="https://m.media-amazon.com/images/I/613sIdHOSmL.jpg" alt="テープ" />
        </div>

        <div>
        <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/02/14113934/Different-types-of-Air-filters-in-automobiles-B-11-02-1024x640.jpg" alt="クリーナー" />
        </div>

        <div>
        <img src="https://m.media-amazon.com/images/I/91tapI7groL.jpg" alt="マスキング" />
        </div>

        <div>
        <img src="https://www.foamparts.com/wp-content/uploads/2018/08/reticulated1.jpg" alt="フォーム" />
        </div>
      </div>

      <div className='btnCont'>
      <button className="Btntext" onClick={() => navigate("/product")}>もっと詳しく見る <span></span></button>
      </div>

      {/* NEWS UPDATE */}

      <div className='newsSection'>
        <h1>ニュース更新</h1>
        <h5>私たちはあらゆるニュースを著名な顧客と共有するのが大好きです <br/>
        私たちは成功のマイルストーンへの道を歩み、新たな一歩を踏み出しました。</h5>

        <div className='ImageNewText'>
          {/* text */}

          <div>
          <h4>EssGee は ISO 9001:2015 認証を取得しています</h4>
          <p>品質は、EssGee の企業ビジネス原則の不可欠な部分です。
             これらの原則は、安全で安全な製品とサービスを提供するための当社の行動の指針となります。
             準拠しており、優先されます。 それらは私たちの野望を達成するために不可欠です
             品質を向上させる製品とサービスを提供することで認められ、信頼されること
             生命の健康を守り、より健康な未来に貢献します。 EssGee では、次のことを行わないことをお約束します。
             当社の製品とサービスの安全性、コンプライアンス、品質を犠牲にすること。
             ISO 9001:2015 認証は、当社の取り組みを強化するのに役立ちます。 これにより、
             お客様の信念と私たちへの信頼。</p>
          </div>

          {/* image */}

          <div>
            <img src="https://img.freepik.com/premium-vector/quality-control-approved-seal-stamp-green-flat_78370-753.jpg" alt="品質" />
          </div>
        </div>

        <div className='ImageNewText'>
          {/* text */}

          <div>
          <h4>EssGee が「Masker」を発売</h4>
          <p>「MASKER」はエスジー工業がお届けするマスキングテープのブランドです。 マスキングテープは粘着テープとも呼ばれ、薄くて破れやすい紙と、剥がしやすい粘着剤でできた感圧テープの一種です。 接着剤は、テープを残留物を残さず、貼り付けた表面に損傷を与えることなく簡単に剥がすことができるため、テープの有用性にとって重要な要素です。 「マスカー」テープは壁塗装や自動車用途などに使用されています。
             新しく立ち上げられた (Masker) Web サイトにアクセスしてください: www.maskertape.com</p>
          </div>

           {/* image */}

           <div>
            <img src="https://m.media-amazon.com/images/I/71CbTD2WU3L.jpg" alt="quality" />
          </div>

        
        </div>
      </div>

      <div>
        <h1>私たちのコアメンバー</h1>
      </div>

          <HomeSlider/>

          {/* facilty and system */}

          <div className='blogCont' style={{width: '90%'}}>

            <h1 className="animated-text">設備と品質</h1>

            <h3 style={{
              fontSize: '20px',
              lineHeight:'35px'
              
            }}>当社の高度な施設では、慎重な品質システムを使用して、
            私たちが行うすべてのことが優れており、信頼できるものであることを確認します。
            私たちは最高の製品を提供することに全力で取り組んでいます
            とサービス。つまり、品質の基準を設定します。
            私たちの業界で、私たちが提供するものに必ず満足してください。</h3>
              
             
              <img 
              style={{ 
                width:'300px', 
                height:'300px', 
                margin: 'auto'}} 
                
                src="https://ugokawaii.com/wp-content/uploads/2022/08/increase.gif" alt="" /> 
                

                <div><button class="button-78" 
          onClick={() => navigate("/blog")}
          role="button">もっと知る</button></div>
          </div>



          <Client/>
          </div>

          {/* blog */}

          <div className='blogCont'>


            {/* button 2 */}

            <button class="button-92" 
            onClick={() => navigate("/blog")}
            role="button">
            <h3>既存のブログを読みたい </h3></button>


          </div>

          



        </div>
    
    
    
      );
    }

    // english langugae

    return (
          <div>

           <div className="video-container">
        <video ref={videoRef} autoPlay muted loop>
          <source src={video1} type="video/mp4" />
        </video>
      </div>

      <div style={{ width: '100%' }}>

        {/* product */}

        <h2 style={{paddingTop:'1%'}}>Our Product</h2>
        <div className='productImageCont'>
          <div>
          <img src="https://m.media-amazon.com/images/I/613sIdHOSmL.jpg" alt="tape" />
          </div>

          <div>
          <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/02/14113934/Different-types-of-Air-filters-in-automobiles-B-11-02-1024x640.jpg" alt="cleaner" />
          </div>

          <div>
          <img src="https://m.media-amazon.com/images/I/91tapI7groL.jpg" alt="masking" />
          </div>

          <div>
          <img src="https://www.foamparts.com/wp-content/uploads/2018/08/reticulated1.jpg" alt="foam" />
          </div>
        </div>

        <div className='btnCont'>
        <button className="Btntext" onClick={() => navigate("/product")}>Explore More <span></span></button>
        </div>

        {/* NEWS UPDATE */}

        <div className='newsSection'>
          <h1>NEWS UPDATE</h1>
          <h5>We love to share every news with our eminent customers <br/>
          As we put forward another step in walking the journey of milestones of success.</h5>

          <div className='ImageNewText'>
            {/* text */}

            <div>
            <h4>EssGee is ISO 9001:2015 Certified</h4>
            <p>Quality is an integral part of EssGee's Corporate Business Principles. These principles guide our actions to deliver products and services that are safe, compliant and preferred. They are essential for the achievement of our ambition to be recognized and trusted to offer products and services that enhance the quality of life and contribute to a healthier future. At EssGee, our commitment is to never compromise on the safety, compliance and quality of our products and services. ISO 9001:2015 Certification helps to strengthen our commitment. This enhances our customers beliefs and trust in us.</p>
            </div>

            {/* image */}

            <div>
              <img src="https://img.freepik.com/premium-vector/quality-control-approved-seal-stamp-green-flat_78370-753.jpg" alt="quality" />
            </div>
          </div>

          <div className='ImageNewText'>
            {/* text */}

            <div>
            <h4>EssGee launches 'Masker'</h4>
            <p>"MASKER" is a Brand for masking tapes brought to you by ESSGEE Industries. Masking tape, also known as sticky tape, is a type of pressure-sensitive tape made of a thin and easy-to-tear paper, and an easily released pressure-sensitive adhesive. The adhesive is the key element to its usefulness, as it allows the tape to be easily removed without leaving residue or damaging the surface to which it is applied. "MASKER" Tapes are used by Wall Painting , Automotive Usage, etc.
              Visit our newly launched (Masker) Website: www.maskertape.com</p>
            </div>

             {/* image */}

             <div>
              <img src="https://m.media-amazon.com/images/I/71CbTD2WU3L.jpg" alt="quality" />
            </div>

          
          </div>
        </div>

        <div>
          <h1>Our Core Member</h1>
        </div>

            <HomeSlider/>

            {/* facilty and system */}

            <div className='blogCont' style={{width: '90%'}}>

              <h1 className="animated-text">Facility and Quality</h1>

              <h3 style={{
                fontSize: '20px',
                lineHeight:'35px'
                
              }}>In our advanced facility, we use a careful Quality System to 
                make sure everything we do is excellent and reliable. 
                We're totally committed to giving you the Best products 
                and services, which means we set the standard for quality 
                in our industry and make sure You're happy with what we provide.</h3>
                
               
                <img 
                style={{ 
                  width:'300px', 
                  height:'300px', 
                  margin: 'auto'}} 
                  
                  src="https://ugokawaii.com/wp-content/uploads/2022/08/increase.gif" alt="" /> 
                  

                  <div><button class="button-78" 
            onClick={() => navigate("/blog")}
            role="button">Know More</button></div>
            </div>



            <Client/>
            </div>

            {/* blog */}

            <div className='blogCont'>


              {/* button 2 */}

              <button class="button-92" 
              onClick={() => navigate("/blog")}
              role="button">
              <h3>Want to Read Some Exiting blog </h3></button>


            </div>

            



          </div>
      
      
      
        );
}
