<template>
  <div id="app"> 
    <div class="p-3 mb-2 bg-dark text-white" width="70"  height=“70”>M-SHOP</div>
  <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
    <p class="h3 my-0 me-md-auto fw-normal"></p>
    <a class="btn btn-outline-primary" >จำนวน {{product1.amount+product2.amount+product3.amount+product4.amount+product5.amount+product6.amount}} คู่ </a>
  </header>
  <main class="container">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product1.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://cdna.lystit.com/200/250/tr/photos/eastdane/43af165b/vans-BlackWhite-Old-Skool-Sneakers.jpeg" width="200"  height=“200”>
        <ul class="list-unstyled text-small">1800 บาท</ul>
        <div id="example-1">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "product1.amount += 1" >กดรับสินค้า</button>
          <p>จำนวน {{ product1.amount }} คู่ </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product2.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ViWMWhnSNXQ3j6CLsjnqAGWlkyqnfb1kPA&usqp=CAU" width="220"  height=“220”>
        <ul class="list-unstyled text-small">1737 บาท</ul>
        <div id="example-2">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "product2.amount += 1" >กดรับสินค้า</button>
          <p>จำนวน {{ product2.amount }} คู่ </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product3.name}}</h4>
      </div>
      <div class="card-body">
        <img src="data:image/jpeg;base64,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" width="250"  height=“250”>
        <ul class="list-unstyled text-small">2400 บาท</ul>
        <div id="example-3">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "product3.amount += 1" >กดรับสินค้า</button>
          <p>จำนวน {{ product3.amount }} คู่ </p>
        </div>
      </div>
    </div>
    </div>
  </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product4.name}}</h4>
      </div>
      <div class="card-body">
        <img src="data:image/jpeg;base64,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" width="270"  height=“270”>
        <ul class="list-unstyled text-small">2160 บาท</ul>
        <div id="example-4">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "product4.amount += 1" >กดรับสินค้า</button>
          <p>จำนวน {{ product4.amount }} คู่ </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product5.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLtPRt3e1HYwvFY_t-cw4RAjeii_G6hcAIPfPHZqRd-jHSuMdljIqTafCo7J1CTc1Hc_hqeL0&usqp=CAc" width="240"  height=“240”>
        <ul class="list-unstyled text-small">3032 บาท</ul>
        <div id="example-5">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "product5.amount += 1" >กดรับสินค้า</button>
          <p>จำนวน {{ product5.amount }} คู่ </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product6.name}}</h4>
      </div>
      <div class="card-body">
        <img src="data:image/jpeg;base64,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BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEUL2o2vnp8So6CKKJ3lbbmR5deOxNyGi18m9YUeouUfEJ62opIaSlLKSSVs1VI98cETInOaZJDnu33TYZnXgCQG1UWpv+1ofleEf9cP/gXJHynSu0qsAz66iqafG8GSDaqLWA5RKg6VOzv+ukH1xqO4ty21UErovJqCfct8LBO+SF12h3QfbO17HtBQbxRYrZXFXVdHBUuaGGeFshaLkNLhewJWVQEREBERAREQEREBERAREQEREBERAREQEREBERBpnlbxVtJjWGVDvNiYC89TDKWvPg1xPgsLyn7XUZZ5JhskZZVSvqayZpyleTdsTnEZi4BI6g0da2njlLR1Ja+poIqhzA5m9I3e3N3VoO6bDnHBoOV7OPDPpU+zGEukEZwqkZclubG728GBxG7bQX87Q9eaDzQTHc2tuublcAEODgOHm3Avft04KjA1rhcsd8Gc+iRe51BNr2svTE2y2Fb5YzDKB9iyxs03a9zGlx3WndsX6HW3s4vwcwq4AwmjN7Xsy+5dwbuPs3ovFxcHIX1QeZZhnq05agAD3ZXVi9QN2bwjmWy/0bQdIi7bMO6LE3yF3HK1gL5qjtnMKuB/RFK34MP6TGjeuSNyPI7zzbIZXz0sgzHJp/3VRf8AlI/3VJVjdn93mWNZCII2taI2DzQ3dBAAIFgLkeCySAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICWREFA0DTJVREFN0a2z6+KqiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/Z" width="270"  height=“270”>
        <ul class="list-unstyled text-small">2600 บาท</ul>
        <div id="example-6">
          <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-on:click= "product6.amount += 1" >กดรับสินค้า</button>
          <p>จำนวน {{ product6.amount }} คู่ </p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <p class="h4 my-0 me-md-auto fw-normal">รายการสินค้า</p>
  <header class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
  <div v-if="product1.amount >= 1">
    <img src="https://cdna.lystit.com/200/250/tr/photos/eastdane/43af165b/vans-BlackWhite-Old-Skool-Sneakers.jpeg?width=260&height=260" width="60"  height=“60”>
    <p1> x{{ product1.amount }} </p1>
  </div>
  <div v-if="product2.amount >= 1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ViWMWhnSNXQ3j6CLsjnqAGWlkyqnfb1kPA&usqp=CAU?width=260&height=260" width="60"  height=“60”>
    <p1> x{{ product2.amount }}</p1>
  </div>
  <div v-if="product3.amount >= 1">
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERMQEhEWFRUQDw8PEA8VEhISDxAPFRUWFhUSFRUYHCggGBolGxcVITEhJSorMDEuFx8zODMtNygtLisBCgoKDg0NFhAPFislHx4tMjYtLS0tLS03NystNzc4NzctMSszNzc3LDcrNy03NysrNzcrLjctLS43Nzc1NyszMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgQFAwEGB//EAEAQAAIBAgIGBgcFCAEFAAAAAAABAgMRBCESMUFRYZEFE1JxgaEUFSIyQrHRBmKiweFTcpKTo9Lw8SMWM0Nzgv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJREBAAIBAwIGAwAAAAAAAAAAAAERAgMSMSHhBEGhwfDxUWFx/9oADAMBAAIRAxEAPwD9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAca1fRdrXJ06ilqf1KGLre1ZeH1OSqNNN5cUapGuCthsTpZPXqT2SLJlQAAAAAAAAAAAAAAAAAAAAAAAHjZ5Conqadteeor153lbd82YvTWFqxar0G1OOuK1TjuttLQ+kBidDfaGFZWn7E1lJP3b/l4m0nclD0AjKSWtgSKuNrWWjfY27LZxFTFXyjz3HCclFcdr3liEcFFa+KvvsUej5VXKaqxikpew429yzzdv/nXvZZqYhbNfA9V/iuuGtG0Sp009vFLa+JOWO0ctLPZHW+RWWHTm5xlZuChpa/Z4LVfK1zyEY0ZJWlJ1G06jzs8rXtqXvZ8ArZwmLVRXWTzTXFFgwFWlOVop27TuvFbzRo4uSVp696MzBa8CMJp5p3JGVAAAAAAAAAAAAAAAAACNSVk3uTYGfVftNrfk/mSjU2MjBZEZx/TgdEVsZ0TTqPTXsz7Syb795whRr08o+13Oz5fqaCnYekAcKVWu9cbd8vozuqcvil4LLzOcsUVa2MttJQuzrKKsjNxWMS1vw2vwKlTFueUVfj8PM9oYazvJ3exLVfgtpR3wrz0mv3Vu7+JcVbgyEKEnst35eX+jr6M1tXmgj2m03k7PzJSp31q6X+ajk4W1qx0jJrb4PwA8q3dnF2ekm7Wzj2cyFWObnN5L2ml7sVfK+9+R1c09atx/Uk47s/nzA5zrwpq6dr5pLNy4pFrDY9v3o7L6Tyvw7yooRVla2rWti1JbLcCMesatlda5alZarLeKVt06ilqf1JmJOpoxau24WbdrXb1WLuHxuVp68lpJfkZmBeB5GSepnplQAAAAAAAAAADji3aD5czsV8d7j718yxyKkGTOcWSubZV8TdLLZv3FSUZP4l4L/OBoVDjCEd17b8/mBnypXy0m+C18iUMBf4PGX6+Ow01Kw60CvTwHafgvqW6dGMdS8dvMh1p51gVYyDZW6w86wCw5HOVNPh3fQjFMlo8QOMqTXHyZzTtvT5f7LViWj/rWBWVV8GeaT2ez3O/k8kdXQjxXc/yI+jx4vvdvkEc1Jt2spNbbW0f88Dslk/B+JOELKyVlu2E7fMK8ZONWS2/mRYIOyxUuDJLGLauRWItkoaEcRF7bd+R0TuZLkcK2MUM758HYUN4GX0L0j1ulFvOLut7j/s1DKgAAFPpGrZKPa/KxcMHpXHR9IVCSkn1SqwfwSi5aLs+0nbwaLHI7xkHIqaX3nyIyl95cn9DaLTqHKVS2fgVpVH2lzf0IdY+0ubAuuZ51hSU5dpc2SUpdpc2Bb0z3TKinLeubPdOW9cwLSlxJqS3lPTlvXM905b1zAuqpxPesKSnLeuZLTl2lzYF1Mncz+sfaXmNN9pef0A0NIaSM7T+/wCTClf4nyVvmQaPWI8nWWRmSnHtPkeTqR48yi+8QjnLGxW0z3Vh2Tx4hbF8hQuvHbk34HKWKk9nN2KrxL3HOWIl3ChYm5vXK3d+pXnGO138zjObetkblF7oz/vU9FW9pd9tvkfXHx/Q8v8Anp/vP5M+wMZcqAAyBl9N0L6E7+5JprLO6yuahCpTUlZrJiBgNHGcTSxGAmvcWkuLsyu8FV7H4kbtFF0yPVl94Gr2POJH1fV7HmhYpaB7luLfq6r2PNHvq6r2PNFuBScuA0uBd9XVex+JD1fV7H4kS4FNHqRc9X1ex5o99Aq9jzj9RcCpYJFv0Cr2PND0Cr2PxIXAqNEWmXfQavY/Eh6BV7H4kLgUFF/U8nd92xF/1fV7C/iR4+ja3Zj/ABfoW4GdoMOBoPout2Y/x/oePoiv9xeLY3QM7QPbF59B13/5ILuizx/Zyq9dflGxNwotHGpVitclzRpf9Jt+9Wb8P1Jx+yENtR8kNysT0mDdr/OxrdG9H0quuo+5K3my3D7KUVrlJ+JpYPounS91eLZN0jphMBTpe5HPtPOXNlkAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABX6Rxao0qlaWqlCU2lrair2XEsGV9psHPEYeVCna9SdKM7u1qWnFz/CmvEzlMxE06aUY5amMZT0vr/HJfaOm8NTxMU5KrUpUo001pqrOahovZdNvkc6HT9SppSpYOpUhGpUpqoqlGKm4ScW0pSTtdFPHfZ6axEalG3VussVOldKMcRCnOMZRX3pSjf90p9GfZ6UI06dTBxm4qPW1vS5Rk5POTUEra72zz4HHdqXU/PSXvjT8LtmYm/PrPl+Oceset8N/pbp6nheqVRPSrThHQTT6uLaUpyfZTazNaUrK7ySzb2JHxsPsdGWHrOcUq9WNR00pzcKH7Omnf2knZtva2fRtz9FfWWU/R31iTutPQ9qz7zphOVzuh59bT0YxxjTyubqe365dPWdPfL+VV/tHrOnvl/Kq/2mTjOlKlOtGCuqSp4fSnorRjJ1Iaacv/XK/CzZSw3SOLSi25Sco0nOMoQioNxwspWtC971ais93A1uZjQuL9+z6P1nT3y/lVf7R6zp75fyqv8AafLrpfF6OkpNpU23J04e+6GnZpQ2VLx2WtZ3ZYqdKVdKVsQ1Fzhou1HShB4hU5fBm1BaWfu6Svcm5Z8NX32fTYfExqX0Xq1ppxa8GrnYy+iKkpScpq05YfCymrWtNqbkrbM7moah584qaAAVkAAAAAAAAAAAAAAAAAAAAADJnRaqNxg5OU7typrK+TcZ7EthrADHo9Hz6uLSjCSpuzUbVHJwatJ97v4E3RuoqFJwcb6Tsl7Oi043+K7t8zVAGRhcE06alCKjoZuMLSb0bOFTPNZ80WMJgo2qJwS051I3SSfVvc9xfAFOOGqpWVbJKy/443se9RV/bf04/UtgNbpVOoq/tv6cfqOoq/tv6cfqWwDdKvhsM4uUpS0pS0U3ZJWjeySXeywAEmbAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==" width="60"  height=“60”>
    <p1> x{{ product3.amount }}</p1>
  </div>
  <div v-if="product4.amount >= 1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNrSyKTLvISk0Ts4OIDS4qwEqVCi6XBPen54qMB3vPp9G-ZPKWtTFqr-35s-jIYdGVE4OeKA&usqp=CAc" width="60"  height=“60”>
    <p1> x{{ product4.amount }}</p1>
  </div>
  <div v-if="product5.amount >= 1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLtPRt3e1HYwvFY_t-cw4RAjeii_G6hcAIPfPHZqRd-jHSuMdljIqTafCo7J1CTc1Hc_hqeL0&usqp=CAc" width="60"  height=“60”>
    <p1> x{{ product5.amount }}</p1>
  </div>
  <div v-if="product6.amount >= 1">
    <img src="data:image/jpeg;base64,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" width="60"  height=“60”>
    <p1> x{{ product6.amount }}</p1>
  </div>
  </header>
  <h4>ราคารวม {{ sum+product1.amount*product1.price+product2.amount*product2.price+product3.amount*product3.price+product4.amount*product4.price+product5.amount*product5.price+product6.amount*product6.price }} บาท</h4>
  <button type="button" class="w-50 btn btn-lg btn-outline-primary" v-on:click="say('สั่งซื้อเสร็จสิ้น')" >สั่งซื้อ</button>
  <input type="button" value="Reset" onClick="javascript:location.reload();">
  </div>
  </main>
  </div>
</template> 

<script>
export default {
  name: 'App',
  data(){
    return{
      product1:{
        name:"Vans Men's Black Old Skool Sneakers",
        price:1800,
        amount:0
      },
      product2:{
        name:"Vans Classic Slip-on Mens Black / White Checkerboard Canvas Sneakers",
        price:1737,
        amount:0
      },
      product3:{
        name:"VANS OLD SKOOL TRUE WHITE SNEAKERS",
        price:2400,
        amount:0
      },
      product4:{
        name:"Vans Old Skool - Navy",
        price:2160,
        amount:0
      },
      product5:{
        name:"VANS OLD SKOOL RACING RED WHITE SNEAKERS",
        price:3032,
        amount:0
      },
      product6:{
        name:"VANS SK8-HI BLACK/WHITE",
        price:2600,
        amount:0
      },
      sum: 0,count:0,say: function (message) {
      alert(message)
    }
    }
  }
}
</script>
