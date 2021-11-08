import * as React from "react"
import styled from "styled-components"

const Header2 = styled.h2`
  font-family: "Work Sans", sans-serif;
  background: #fbfbfb;
  width: 100%;
  height: 220px;
  border-bottom: 1px solid #e1e1e1;
  text-align: center;
  padding: 70px;
  font-family: "Work Sans", sans-serif;
  font-size: 58px;
  margin-bottom: 100px;
  line-height: 58px;
`

const Header3 = styled.h3`
  width: 100%;
  text-align: left;
  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  line-height: 40px;
`
const Paragraph = styled.p`
  width: 100%;
  text-align: left;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  line-height: 27px;
  :last-of-type {
    margin-bottom: 5rem;
  }
`

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const TermsOfUse = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        alignContent: `center`,
      }}
    >
      <Header2>Terms of Use</Header2>

      <div
        style={{
          alignItems: `center`,
          width: `50%`,
          //border: `2px solid black`
        }}
      >
        <Header3>1. Terms of use and acceptance</Header3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          fames etiam mauris, nullam senectus id mauris. Amet porttitor
          convallis non egestas.
        </Paragraph>
        <Header3>2. Terms of use and acceptance</Header3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet etiam
          diam laoreet leo nam diam. Vel neque, arcu gravida a urna amet eget
          mattis nunc. At bibendum ultrices imperdiet consectetur. Felis
          consectetur odio nunc amet velit augue. Aenean ultrices tempor, magna
          tellus nunc rhoncus. Rutrum condimentum et vel facilisi rutrum neque
          aliquam ultricies aenean. Ut et congue dictum ornare bibendum id. At
          molestie risus nec non. Lacus purus sit morbi nulla habitant congue
          pellentesque enim. Pharetra, dui curabitur vitae lectus velit.
          Ultrices pulvinar lectus porttitor id feugiat tellus viverra. Tellus
          in porttitor sagittis tincidunt urna duis lectus. Habitasse vulputate
          vulputate vitae lorem aliquet.
        </Paragraph>
        <Paragraph>
          Arcu, egestas donec est volutpat, orci elit metus. Cursus nibh lacus
          lectus nisl. Molestie viverra posuere volutpat, purus quis. Fermentum
          lorem sit massa ut quam ut ultrices pretium. Consectetur fermentum
          bibendum integer netus eget quis pretium. Morbi tellus scelerisque
          dictum metus, consequat, morbi mauris nisl diam. Quisque at consequat
          neque consequat scelerisque nisl sagittis pellentesque. Felis neque
          amet, quisque nulla consectetur. Amet ultrices aliquet scelerisque mi.
          Metus, sit turpis facilisis sem eget massa, eget duis ut. Mi
          ullamcorper in pellentesque eget faucibus id adipiscing eget ornare.
        </Paragraph>
        <Paragraph>
          Sapien ut mauris egestas commodo pellentesque. Nisi ultricies enim
          diam velit justo. Suspendisse viverra ultricies tortor a odio donec
          amet. Sagittis, morbi quis mi volutpat. Nunc lacus vitae malesuada
          pellentesque gravida ultrices fringilla. Semper ultrices convallis
          vivamus facilisis. Vehicula adipiscing in lacus dui. Nec dui eu
          blandit non. Nullam consequat egestas maecenas pharetra ut dignissim
          purus. Sit molestie velit justo ultrices. Sit sed egestas habitant at
          adipiscing rhoncus. Et id suspendisse neque nunc enim viverra felis
          habitant. Nibh diam pharetra, porta eget pretium dignissim nisl.
          Vitae, consectetur interdum mi eu orci, eget enim.
        </Paragraph>
        <Paragraph>
          Bibendum id ut non rutrum. Faucibus sit dolor donec vulputate eget sit
          sed pharetra. Placerat porta sit dictum venenatis volutpat. Magna quis
          consequat nunc, enim eget dui. Eget enim, elit at augue mi egestas ac
          quam tristique. Ornare eleifend amet eget quam in egestas. Dignissim
          etiam sagittis nulla tortor id enim fermentum tortor. Rhoncus, mi non
          enim, ultrices erat sed.
        </Paragraph>
      </div>
    </div>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default TermsOfUse
