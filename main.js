!function(){
  function writeCode(preCode,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let timer = setInterval(()=>{
      n += 1
      container.innerHTML = preCode + code.substring(0,n)
      styleTag.innerHTML = preCode + code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if( n >= code.length){
        window.clearInterval(timer)
        fn && fn.call()
      }
    },10)
  }

  let code = `
  .preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE600;
  }
  .wrapper{
    height: 220px;
    width: 320px;
    position: relative;
  }
  .nose{
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 32px;
  }
 
  .eye.left{
    height: 56px;
    width: 56px;
    background: #2e2e2e;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -120px;
    top: 0;
  }
  .eye.left::before{
    content:'';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 8px;
    border: 2px solid black;
  }
  .eye.right{
    height: 56px;
    width: 56px;
    background: #2e2e2e;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    right: 50%;
    margin-right: -120px;
    top: 0;
  }
    .eye.right::before{
    content:'';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 8px;
    border: 2px solid black;
  }
  .upperLip-left{
    width: 72px;
    height: 26px;
    background: #FFE600;
    border: 2px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 32px 24px;
    position: absolute;
    left: 50%;
    top: 53px;
    margin-left: -72px;
    transform: rotate(-25deg);
  }
  .upperLip-right{
    width: 72px;
    height: 26px;
    background: #FFE600;
    border: 2px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 32px 24px;
    position: absolute;
    right: 50%;
    top: 54px;
    margin-right: -72px;
    transform: rotate(25deg);
  }
  .lowerLip-wrapper{
    height: 157px;
    width: 320px;
    position: absolute;
    left: 50%;
    margin-left: -160px;
    bottom: 0;
    overflow: hidden;
  }
  .lowerLip{
    width: 140px;
    height: 1000px;
    background: #9b000a;
    border: 2px solid #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -70px;
    border-radius: 160px/800px;
    overflow: hidden;
  }
  .lowerLip::before{
    content: '';
    display: block;
    width: 130px;
    height: 130px;
    background: #ff485f;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -65px;
    border-radius: 50%;
  }
  .face.left{
    width: 72px;
    height: 72px;
    background: #f00;
    position: absolute;
    left: 50%;
    margin-left: -160px;
    top: 96px;
    border-radius: 50%;
    border: 2px solid #000;
  }
  .face.right{
    width: 72px;
    height: 72px;
    background: #f00;
    position: absolute;
    right: 50%;
    margin-right: -160px;
    top: 96px;
    border-radius: 50%;
    border: 2px solid #000;
  }
  `

  writeCode('',code)
}.call()