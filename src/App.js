import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './assets/components/header';
import TopBox from './assets/components/topbox';
import Content from './assets/components/content';
import BottomBtn from './assets/components/bottomButton';

function App() {
  return (
    <div class="mainwrapper">
    <Header/>
    <TopBox/>
    <Content title="Who We Are" description="The usefulness of nonsensical content Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised."/>
    <BottomBtn/>
    </div>
  );
}

export default App;
