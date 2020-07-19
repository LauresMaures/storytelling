<template>
  <poetry-impressions>
    <!--- Rilke's poem 'Über die Geduld' -->
    <div class="container-fluid padding">
      <div class="row main text-center">
        <div class="col-12">
          <h1 class="display-4">Über die Geduld</h1>
        </div>
        <!--<hr />-->
        <div class="col-12">
          <p>
            Man muss den Dingen<br />
            die eigene, stille<br />
            ungestörte Entwicklung lassen,<br />
            die tief von innen kommt<br />
            und durch nichts gedrängt<br />
            oder beschleunigt werden kann,<br />
            alles ist austragen - und<br />
            dann gebären...<br /><br />
            Reifen wie der Baum,<br />
            der seine Säfte nicht drängt<br />
            und getrost in den Stürmen des Frühlings steht,<br />
            ohne Angst,<br />
            dass dahinter kein Sommer<br />
            kommen könnte.<br /><br />
            Er kommt doch!<br /><br />
            Aber er kommt nur zu den Geduldigen,<br />
            die da sind, als ob die Ewigkeit<br />
            vor ihnen läge,<br />
            so sorglos, still und weit...<br /><br />
            Man muss Geduld haben<br /><br />
            Mit dem Ungelösten im Herzen,<br />
            und versuchen, die Fragen selber lieb zu haben,<br />
            wie verschlossene Stuben,<br />
            und wie Bücher, die in einer fremden Sprache<br />
            geschrieben sind.<br /><br />
            Es handelt sich darum, alles zu leben.<br />
            Wenn man die Fragen lebt, lebt man vielleicht allmählich,<br />
            ohne es zu merken,<br />
            eines fremden Tages<br />
            in die Antworten hinein.
          </p>
          <p class="author">- Rainer Maria Rilke</p>
        </div>
      </div>
    </div>

    <!--- Fixed background -->
    <figure>
      <div class="fixed-wrap">
        <div id="fixed"></div>
      </div>
    </figure>

    <!-- Other poems by Rilke -->
    <div class="container-fluid padding">
      <div class="row main text-center">
        <div class="col-12">
          <h1 class="display-4">Andere Gedichte von Rilke</h1>
        </div>
        <!--<hr />-->
      </div>
    </div>

    <!--- Two Column Section: Panther poem -->
    <div class="container-fluid padding">
      <!--<hr class="my-4">-->
      <div class="row padding">
        <div class="col-lg-6">
          <h2 class="poem_headline">Der Panther</h2>
          <h3 class="poem_headline">Im Jardin des Plantes, Paris</h3>
          <br />
          <p>
            Sein Blick ist vom Vorübergehn der Stäbe<br />
            so müd geworden, dass er nichts mehr hält.<br />
            Ihm ist, als ob es tausend Stäbe gäbe<br />
            und hinter tausend Stäben keine Welt.<br /><br />

            Der weiche Gang geschmeidig starker Schritte,<br />
            der sich im allerkleinsten Kreise dreht,<br />
            ist wie ein Tanz von Kraft um eine Mitte,<br />
            in der betäubt ein großer Wille steht.<br /><br />

            Nur manchmal schiebt der Vorhang der Pupille<br />
            sich lautlos auf -. Dann geht ein Bild hinein,<br />
            geht durch der Glieder angespannte Stille -<br />
            und hört im Herzen auf zu sein.
          </p>
          <p class="author">- Rainer Maria Rilke</p>
          <!--<a href="#" class="btn btn-primary">Mehr Gedichte</a>-->
        </div>
        <div class="col-lg-6">
          <img
            src="../assets/panther_freeToUse.jpg"
            class="img-fluid"
            alt="picture of a panther"
          />
        </div>
      </div>
    </div>

    <!--- Two Column Section: 'Ich lebe mein Leben' poem -->
    <div class="container-fluid padding">
      <hr class="my-4" />
      <br /><br />
      <div class="row padding">
        <div class="col-lg-6">
          <img
            src="../assets/tree_rings.jpg"
            class="img-fluid"
            alt="picture of tree rings"
          />
        </div>
        <div class="col-lg-6">
          <h2 class="poem_headline">
            Ich lebe mein Leben<br />
            in wachsenden Ringen
          </h2>
          <br />
          <p>
            Ich lebe mein Leben in wachsenden Ringen<br />
            die sich über die Dinge ziehn.<br />
            Ich werde den letzten vielleicht nicht vollbringen,<br />
            aber versuchen will ich ihn.<br /><br />
            Ich kreise um Gott, um den uralten Turm,<br />
            und ich kreise jahrtausendelang;<br />
            und ich weiß noch nicht: bin ich ein Falke, ein Sturm<br />
            oder ein großer Gesang.
          </p>
          <p class="author">- Rainer Maria Rilke</p>
        </div>
      </div>
      <!-- <hr class="my-4"> -->
    </div>
  </poetry-impressions>
</template>

<style scoped>
/*main sections*/
.padding {
  padding-bottom: 2rem;
}
.main {
  width: 75%;
  margin: 0 auto;
  padding-top: 2rem;
}
.main hr {
  border-top: 2px solid #b4b4b4;
  width: 31.5%;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}
.author {
  padding-top: 0.5rem;
}

/*---Media Queries --*/
@media (max-width: 992px) {
}
@media (max-width: 768px) {
  .display-4 {
    font-size: 200%;
  }
  .poem_headline {
    font-size: 150%;
  }
}
@media (max-width: 576px) {
  .display-4 {
    font-size: 160%;
  }
  .poem_headline {
    font-size: 120%;
  }
}

/*--- Fixed Background Image --*/
figure {
  position: relative;
  width: 100%;
  height: 60%;
  margin: 0 !important;
}
.fixed-wrap {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#fixed {
  background-image: url("../assets/bg_letter_writing.jpg");
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
}

/*--- Bootstrap Padding Fix --*/
[class*="col-"] {
  padding: 1rem;
}
</style>
