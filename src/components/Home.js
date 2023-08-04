import Header from "./Header";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

<Header/>



export default function Home() {
  return (
    <> 
    <Container>

      {/* Header */}
      <Row style={{background: "lightgray" }}>
      <Col sm={4} >
        
      </Col>  
      <Col sm={5}>
      
      </Col>
      <Col sm={1} style={{display: 'flex'}}>
        
        
        </Col>
      </Row>

      {/* Chats and Chat Numbers */}
      <Row style={{ marginTop:"50px",}}>
        <Col sm={7}>
            <div style={{ marginTop: "150px"}}>
                <h5>
                    <span style={{ color: "#0075f6", fontWeight:"700" }}>  ATTENTION </span>
                </h5>
                <h1>
                    <span style={{color:"#0075f6"}}>
                        {/* <span style={{ color:"black" }} > I'm </span> */}
                        <span style={{ color:"#0075f6" }} > Find your next top tech job in 1 week. </span>
                    </span>
                </h1>
                <h5>
                Are you a top 2% Software Engineer, Product Manager or Data Scientist?
                Let leading Indian technology companies compete to hire you.
                </h5>
            </div>
          
        </Col>
        <Col sm={5}>
          
          <Row style={{ marginTop:"50px", }}>
          {/* <Image src=" https://webdakaar.com/img/design-&-development.png"  /> */}
          <Image src=" https://as1.ftcdn.net/v2/jpg/02/70/85/80/1000_F_270858057_b1N7vYAR1TyIay54lThVkKg66aFGE8Ef.jpg"  />
          
          </Row>
        </Col>
      </Row>

    </Container>
    <Container>
    {/* <h2 className="mt-5 mb-4 text-center " style={{color:"#0075f6"}}>LOOK WHAT I CAN DO</h2>        */}
    <h4 className="font-weight-bold text-center text-info">
      {/* <Image src="https://img.icons8.com/dotty/40/000000/web.png" class="m-3 " /> */}
      LEADING COMPANIES BUILD TEAMS ON INTERNSHALA
    </h4>
  <Row>
    <Col sm={6} >
      <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
          <div>
            <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAXVBMVEX///8dofIAnfIAm/EAmfEVn/IAl/Hg8P202/rx+f75/f/T6fzD4vuf0fiFxffq9f5MsPQppPJru/XZ7fxXtPWNyfen1fnL5vt3wPY+qvQAlPFkuPWZzvg9rPN2vPZv+CZ4AAAC8UlEQVRoge2Z6ZKqMBCFoTut7CHsDuD7P+YFRmcchQQatOpW5fupJIeT7nQWHMdisVgsFovFYrFYLP8/Z69s0yKLI/+DooGXEgIRAYJqwse/ZPQ+2egC5P4AkMn7P34MLN0sWPFQgg+qk7Jbj78Heakw5cjWX+2Kd0P3BfT8ukwRXFFzdDPChCM7WB7iPeo3HFlnaCoMLWMxJ3uDLmvi9EIojK+cz7q9m1ajrNw81N7UKRaaly5II1sMol5Bcrn5PCV8t7+cl54INXap9RIFgOFS40USuPXgegtPNKAZZndMLVxqqqH86RWb2fLnX3SyI6LaLuvEv6OIaq7u5JrofjfrGLJO9Bg9zF6jHOmyeQA4bodhPP3pBJtnZc+gy10TnsIHmP1NzkqbVm7OlHXi537ppLoH05XeL1s3mOkXxKWrb9ltiC9b9zGjH6UB+qaKQllrZd3FcmOmX5gpNGiDq/S6mwvkL2fXNEUXIcXdaoXDghDyhRXX7PUSSydPuX5ZW5yRBBD7a8bUhStXd5qexB1nXm0eCU/m3jW6rC3dBD+nRvjTN9HXXz09a083IXWbRQPA28LuNsw7oNwIFDfCpHZUySGluYYp2yM7LHXM+Sv2nj9rl2WZvSj8IIvTdstQ7pUdLRenrZ5xV1aNTLPfLzfaNR5fjeTUp70y7Cxe7O7Y4twpYHNKH2DXfCiYs3vIZVK2OaniI2QdubFYUn+I7OZiCQck1U34+YbqA6M8IdXq5MKdC8ITMa3zTCl/mzGLH6cojNo7l91ZAhlVrV6YdpwBdXj6KUXu9kujFeStfpzfIysT0A8yvCG2zjkh0+VNevgVv6xS48qPR+wwRq3p7YNzXTVKGKsGKv5p6En3+iVQCERDVEcIywOrRd6KdSVq7ipvF2ELxqUIsH1DrcgTpRtnQpUc7PWO72VqNsYEqLK3fh7z665Q040VTXzfXbVd+IFvckEeVV3TFmlaZEnn1eeDlzuLxWKxWCwWi8VisXyaf3jsH8eZomRXAAAAAElFTkSuQmCC" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAkCAMAAACE/VXhAAAAolBMVEX///8iHx8AAAD/mQAfHBwdGRn/lgDp6emAgIATDg7v7+//kwC/v78aFxcXExPa2to4NjZEQkJVVFTR0dErKSn5+fmfnp57enqGhYUIAABsa2tzcnI+PDwyMDDi4uJjYmKsq6v/+vKWlZXIyMi2trb/0KL/58//xo3/7+D/wID/oy1NS0uOjY3/6tf/1a3/rlX/3Lr/tmn/nh//qEP/iQD/unOcG4TAAAAE0UlEQVRYha2VeWOqMAzASy1IOaqogHjhrfOY577/V3tJShGfb3vOLX9sNaT5pWnSMAbijdPtsJnv2kxLPZgFM/iX9PvTOioa034/8VgpQbfVHLbcoPxdlULnjd1emjSMCXgMwMOs20vHsVZNOVe2EKHkW+075SBxwDOlJAc/XS6Vyvi8cDG3uQR7W/GOdtvgVdG6HdebWnV9FPyyYz1U8nCEqpxbIAL/yA6F4krL4m1OKsG9hAxgpfOR0Af6aGtIQxto0aqWUSn9uw6/ZVJ4Ci1yA6uMd7iNm6aGq1phsTEXxkWOH9ucvHW4xP9bzZUo4Y3rohGcEFR2GBdclVpC+8LUYeR8GrN6BGAxNFwr5Bm5tkIBDnAlBKVHQeQ9j8V91HF0GrspiNtTaB2ZBPB5PGqBKnMLrmXbXGAolnQxVpX1y2zxkosxdaWJTqvg+mO4dUnRsazMqpYcXXK8O4wgSzAiKXRsxBVixGI8XpizeNztRXRxHjfxU54pqaiSO3TACy6b7/rbMXGa6LNdYunC+Nhs43WTHdTVeXEAFsBKRLdoC9eGm5GDAQTHZ7jqiIJ7E4z8xh3RvbdMCQhL9woeoWe45qbFQO+pB9O0NbCrXN01WFw6lcMq15slbh5hjdy4TTAVGVmM4QZsfSRcYtEQbWjSKpq4CiLOM6ls644b3HMr523nZE/lW3J3dKCgPGRIJ2fzomiQq0MpuTl2kNQl+wx3xxXZZ9XzUnfJvv7RvXGDT7k9zASfNuL7uvqUq8snbXv68guuhU1oFQ/gDrnbr7kUaDZif9fzZ1yvLMwqV/eyyXmC9zso8yzkP7guJq3LnuaOSwda1S5PJaemxIJbPZsSe+BuhemZ9lPcFBsjRY3uO2yymK46zHvuuHyMi2JAV/gAPHCx+elpIY/az6dcCKqvzJsyLw9JOwGsJLzzibmBeTUnD9wWmNhNkytdDl9x6enEehgpGkv46ltmctDUmurLEDjbsAjpxX7g7misDHcwDRU1UvI1l8ITsptyESJO5gXXVkorsFiG+AgLl6YhlcADd6Snr1QW7+M3TPRXXBbaxj6nUZZgE0E7D/K8BaNPEbeBM1rQZNSj9bF/x1yRDbze8CIo7Kg0g4lF3K20i9luKVh5VH44Y4TiKZxdm2WyW7RQHOScmqMtqdbATFd5ndu2GmiubYf4Ys5aGeedPgEH+n1tRlGTaN1BFEWk6w2igX6C6r0QBnqOpLEiXjtmNxnpxzTu4tzP8mJOxuBn4JarVCu96sYnxPMedev9cj+509Qbo2/6/ba8H3wS5/1VD+vr4tt7jv5VU2vO+VUuO15r3w16tVgu15P18uTUNi9z2dLxz6+la+I7p9e5bHKBlK0m/zesyhE2THz/+5dUlZXvOP7h+DR6var51z3cs7/+EZetN37Ngaw9g16vNj7YLhl78y8/w4IsHKcGaP+yWn7BXh8/aljG/gcanf3jj7ls8gYOAQ3szWkB9frX5/1xdThj7wD1skfV0n+9i+7Jjl8jQbjvnA+njzeQ0+lSo3Z16Jt/WGr7j+v+V7hAXmzo0DWDN1JqfOfNlNLk+gtZLmW/0sl8FIcKrxLk8hexKOv305nS6tyO7fu1w+q3Qf+QyfJ99XG6bM7nzeVwWi2OP2zUP1mJXH6JLEtlAAAAAElFTkSuQmCC" />
            <p class="text-center"></p>
          </div>

      </div>
      {/* className="row skills d-flex flex-wrap justify-content-around align-items-center mb-3 */}
    </Col>
    <Col sm={6}>
    <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
          <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4DahKTag31uUew-iWEMuDm1C2F1YntmT0JQ2lro&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABECAMAAACMCVq7AAAAb1BMVEX////1ZAD1YAD1WwD96uP0VQD0WAD4oX//+vj1aBD7xLH//Pv3ilv82s76spf+9vL0SgD5rI/95Nv3hlP7zLv4nnr7yLb81Mb83tP3kGP2f0f2cSz+7+n1bSD6vKX6wKv2djX3lGr2ez/0QgD4mHJqqs2lAAADwElEQVRYhe2Y15qjMAxGQcaiDb0HkkBm3/8ZVzI9bci3k9ws/5Ux2MfGaqBpu3bt2rVr165RZWncUVwWjv9OrIUS7kggov5OrlsdQeisFRbo+vhOLpGNEzC2ahavOQEdDu/lkjrenrnssWr4ADe74WqOWHC/v4O3cH1xw20AqrFdovwYV6vFxI3EB7mRHLnuET7ILetoaJ2E/hlu7C0xMd2U1vUQq/mFpZzXXAzj+V4KZOwYG6VXOOnAdBJdko6J6Wma5ziFRzfPvlny3Szy/ZPvR9nPXGfFNSQaQzP2D30w47iJMlGd5ZHal65Fimu1q3WhuimE/FbrCqVQCl/lOrP5miFyyGQuzYRqC7EEYfJ7N1qAL1pGp57Qbd9z1bJ9mwfo51e5FeDILZ08vdC0tlfkpyhTUyVTJIuxH5Qjg9JpOk/ownR/xvbcP43heZT+KtDtpRl9MXeepQFdDBnSbYdWS4+IeX+l2JhTmKsDWQqfE2NuuHOHh7TEoR2FPTfndc9h1QTMt3PrJEkObctZ8Rm3QDbvvt2cewO0jhzgR2Okq+ON3z3k9kflupYD8IzL7gx6up6AA8D49rUURaRt0tquMvGMqw5Tx0OxnCCQNEE7XJDhGdomrbkF4jIWXXMLqaoTvDgLk+1gevuGnDPZS9wgDJ9xNUdCT67nPZdymsEU0tvIvYqTeb50vhuuFh+wJ8s5Fh7YsrjhAtQbsXfzEc3gn+9z6V0n/Z5xEeSG0HEW6PwbNw27R1w6xS+1ZyyHa8vm0pAaF7h9+DXuAf07XHdsljVHqWmUyS+6obCy1YkecUsU+R2uA2MsapiUjP0GWZY4UXDf6kSPuBUIb+TqMzeVl8WwRXSk/AFtg5yitkrVsd26jzyjXzm7ppz3UKAYzzQl7mzRnJXgAJudSBu2BKvCJbZh6InYUvsziwLmTmmBC685YAa2+tjZ7ERuHPXeeDxRvaJUOJ1K9+q+x/FJOK4bV2Gk8gL2MMuG+Xg1Dhj6Kh0+p1bQuyKBVb2ipKhjwK3UfACINR1zTsuQpmfETg2ivS4AdXtjuUffoQ81bMZK1KeqkAnPGXdU8/SDIFoXFWRZ4sYbH8kISDdFCXcGzXhVZJc6iaYiM3aiLMv84noQpX/RXHd+QIGcTO79OvmTb2eAH9tuIOXIojrjrb9EVioFDudcku9uzgj/rFwMm6TiVZY/PPyLioRy8yBC2J53f0H8A+ZSJUC7PX0QG9gU2lRU0W/c+a0yslaXYB9OW76HflVuYxjv+R2wa9eu/1x/AQhjLTk2dGNJAAAAAElFTkSuQmCC" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqHl2X2DuQMac76eElXDAwv9BrQ_tgBLm4aA0Pew&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>

      </div>
    </Col>
    
  </Row>  
  </Container>
  <Container>
    {/* <h2 className="mt-5 mb-4 text-center " style={{color:"#0075f6"}}>LOOK WHAT I CAN DO</h2>        */}
  <Row>
    <Col sm={6} >
      <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
          <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9b8GH3W-JQ6EfasOaxY_KErjXL5RxJOXaReVcURs&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="data:image/png;base64,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" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjEGEMJYSGqx1SuQCAxAGBLGwlp6XCRn10mP2nak&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>

      </div>
      {/* className="row skills d-flex flex-wrap justify-content-around align-items-center mb-3 */}
    </Col>
    <Col sm={6}>
    <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
          <div>
            <Image src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTRhtC1mbEFbCIW6Xqn0SKS1tWo3vAA4r3sLlchM&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyp98uUMkd7m5umv0DgGoeljPs8XlMUGq6EEGCQ9P&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>
          <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM2ybH1l0NzAReJGx_XMWb_0K8zGhVDjCJZmPCvQ&usqp=CAE&s" />
            <p class="text-center"></p>
          </div>

      </div>
    </Col>
    
  </Row>  
  </Container>
  </>
  )
}
























