import alexTasting from './images/alex_tasting.png';
import antonioLongbeach from './images/antonio_longbeach.jpg';
import astoriaBridgeDocks from './images/astoria_bridge_docks.png';
import astoriaBridgeEmpty from './images/astoria_bridge_empty.jpg';
import astoriaBridgeRedBoat from './images/astoria_bridge_red_boat.png';
import bagdadTheater from './images/bagdad_theater.png';
import blackButteTree from './images/black_butte_tree.png';
import boats from './images/boats.png';
import bonsai from './images/bonsai.jpg';
import carlButoh from './images/carl_butoh.png';
import christian from './images/christian.png';
import dannyBassFeedback from './images/danny_bass_feedback.png';
import eagleCrestSunset from './images/eagle_crest_sunset.png';
import eagleCrestSunset2 from './images/eagle_crest_sunset2.png';
import entrainLunch from './images/entrain_lunch.png';
import estellaBrotherRollei from './images/estella_brother_rollei.png';
import fadedGraffiti from './images/faded_graffiti.png';
import fadedMural from './images/faded_mural.png';
import greyTrunk from './images/grey_trunk.png';
import kaycie from './images/kaycie.png';
import longbeachKid from './images/longbeach_kid.png';
import momAntonioBeach from './images/mom_antonio_beach.png';
import nikkiSynth from './images/nikki_synth.jpg';
import notnotsEric from './images/notnauts_eric.png';
import otdHalloween1 from './images/otd_halloween1.jpeg';
import otdHalloween2 from './images/otd_halloween2.jpeg';
import parkingLot from './images/parking_lot.png';
import porterPoint from './images/porter_point.jpg';
import proposalRock from './images/proposal_rock.png';
import ripleyGuitar from './images/ripley_guitar.png';
import schnitzer from './images/schnitzer.jpg';
import seanCostume from './images/sean_costume.png';
import seanGuitar from './images/sean_guitar.jpg';
import swimBuddies from './images/swim_buddies.png';
import tessaBeach from './images/tessa_beach.jpg';
import tessaFlowers from './images/tessa_flowers.png';
import yaquinaHeadLighthouse from './images/yaquina_head_lighthouse.png';
import zoranPatSwim from './images/zoran_pat_swim.png';
import zoranPolaroid from './images/zoran_polaroid.jpg';
import longbeachDistantHouse from './images/longbeach_distanthouse.png';
//import longbeachDistantWalker from './images/longbeach_distantwalker.png';
import longbeachNoHorizon from './images/longbeach_nohorizon.jpg';
import longbeachOrcas from './images/longbeach_orcas.png';
//import longbeachOrcasOverhead from './images/longbeach_orcaoverhead.jpg';
import longbeachRestArea from './images/longbeach_restarea.png';
//import longbeachTireMarks from './images/longbeach_tiremarks.jpg';
//import longbeachWetTireMarks from './images/longbeach_wetsandtiremarks.png';
import brokenHouseGorge from './images/Broken House_Gorge.png';
import bryanShakes1K from './images/Bryan_Shakes_1K.png';
import danielSmoking from './images/Daniel_Smoking.png';
import gwapBodecker from './images/Gwap_Bodecker.png';
import mattSavior from './images/Matt_Savior.png';
import morganRiver from './images/Morgan_River.png';
import pdxButohFest2024_1 from './images/PDX_ButohFest2024_1.png';
import pdxButohFest2024_2 from './images/PDX_ButohFest2024_2.png';
import pdxButohFest2024_3 from './images/PDX_ButohFest2024_3.png';
import portBlakeyMillBainBridge from './images/Port_Blakey_Mill_BainBridge.png';
import summerLightKitchen from './images/Summer_Light_Kitchen.png';
import taylorBirthday from './images/Taylor_Birthday.png';
import tessaSunsetLowerShades from './images/Tessa_Sunset_LowerShades.png';
import vistaHousePuddle from './images/VistaHouse_Puddle.jpg';
import vistaHouse from './images/VistaHouse.png';

const imageData = [
  {
    //id: addId(),
    image: alexTasting,
    orientation: 'vertical',
    text: 'Alex Tasting Cherry Blossoms',
    description: {
      title: 'Alex Tasting Blossoms',
      location: 'Cathedral Park, Portland, OR',
      date: 'May 12, 2022',
      camera: '"Ike" Fujica AX3',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { landing: 0, people: 0 },
  },
  {
    //id: addId(),
    image: antonioLongbeach,
    orientation: 'horizontal',
    text: 'Dodging Longbeach',
    description: {
      title: 'Dodging Longbeach',
      location: 'Longbeach, WA',
      date: 'Oct. 18, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '800 / +1',
    },
    album: {
      landing: 1,
      location: 0,
    },
  },
  {
    //id: addId(),
    image: astoriaBridgeDocks,
    orientation: 'horizontal',
    text: 'View From Above',
    description: {
      title: 'View From Above',
      location: 'Astoria, OR',
      date: 'Oct. 19th, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak ColorPlus 200 35mm',
      shot: 'Box',
    },
    album: {
      location: 1,
    },
  },
  {
    //id: addId(),
    image: astoriaBridgeEmpty,
    orientation: 'horizontal',
    text: 'Columbia Crossing',
    description: {
      title: 'Columbia Crossing',
      location: 'Near Dismal Nitch, WA',
      date: 'Oct. 9, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 400 35mm',
      shot: 'Box',
    },
    album: { landing: 2, location: 2 },
  },
  {
    //id: addId(),
    image: astoriaBridgeRedBoat,
    orientation: 'horizontal',
    text: 'Astoria-Megler Bridge',
    description: {
      title: 'Astoria-Megler Bridge',
      location: 'Astoria, OR',
      date: 'Oct. 19, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak ColorPlus 200 35mm',
      shot: 'Box',
    },
    album: { location: 3 },
  },
  {
    //id: addId(),
    image: bagdadTheater,
    orientation: 'horizontal',
    text: 'Bagdad Theater',
    description: {
      title: 'Bagdad Theater',
      location: 'Portland, OR',
      date: 'July 1, 2024',
      camera: '"Ike" Fujica AX3',
      film: 'Kodak Gold 200 35mm',
      shot: 'Box',
    },
    album: { landing: 3, location: 4 },
  },
  {
    //id: addId(),
    image: blackButteTree,
    orientation: 'vertical',
    text: 'Hiking Black Butte',
    description: {
      title: 'Hiking Black Butte',
      location: 'Black Butte, OR',
      date: 'July 10, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford SFX 200 35mm',
      shot: 'Red Filter / Box',
    },
    album: { landing: 4, location: 5 },
  },
  {
    //id: addId(),
    image: boats,
    orientation: 'vertical',
    text: 'Kerr Public Docks',
    description: {
      title: 'Kerr Public Docks',
      location: 'Portland, OR',
      date: 'Sept. 24, 2022',
      camera: '"Ike" Fujica AX3',
      film: 'Fuji Superia Xtra 400 35mm',
      shot: 'Box',
    },
    album: { landing: 5, location: 6 },
  },
  {
    //id: addId(),
    image: bonsai,
    orientation: 'horizontal',
    text: 'Early Morning Bonsai',
    description: {
      title: 'Early Morning Bonsai',
      location: 'Japanese Garden, Portland, OR',
      date: 'Jan. 14, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Gold 200 35mm',
      shot: '400 / + 1',
    },
    album: { landing: 6, location: 7 },
  },
  {
    //id: addId(),
    image: carlButoh,
    orientation: 'vertical',
    text: 'Ghostly Performance',
    description: {
      title: 'Ghostly Performance',
      location: "Mother Foucault's, Portland, OR",
      date: 'Aug. 7, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '800 / +1',
    },
    album: { landing: 7, performance: 0 },
  },
  {
    //id: addId(),
    image: christian,
    orientation: 'horizontal',
    text: 'Friends Hug',
    description: {
      title: 'Friends Hug',
      location: 'Portland, OR',
      date: 'July 16, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { landing: 8, people: 1 },
  },
  {
    //id: addId(),
    image: dannyBassFeedback,
    orientation: 'vertical',
    text: 'Feedback',
    description: {
      title: 'Feedback',
      location: 'Portland, OR',
      date: 'July 13, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford Delta 3200 35mm',
      shot: '1600 / +0',
    },
    album: { landing: 9, people: 2 },
  },
  {
    //id: addId(),
    image: eagleCrestSunset,
    orientation: 'horizontal',
    text: 'Eagle Crest Sunset',
    description: {
      title: 'Eagle Crest Sunset: Juniper',
      location: 'Redmond, OR',
      date: 'July 10, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 800 35mm',
      shot: 'Box',
    },
    album: { landing: 10, location: 8 },
  },
  {
    //id: addId(),
    image: eagleCrestSunset2,
    orientation: 'horizontal',
    text: 'Eagle Crest Sunset',
    description: {
      title: 'Eagle Crest Sunset',
      location: 'Redmond, OR',
      date: 'July 10, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 800 35mm',
      shot: 'Box',
    },
    album: { location: 9 },
  },
  {
    //id: addId(),
    image: entrainLunch,
    orientation: 'horizontal',
    text: 'Back From Break',
    description: {
      title: 'Back From Break',
      location: 'Portland, OR',
      date: 'Sept. 18, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Expired Kodak TriX 35mm',
      shot: '200 / +1',
    },
    album: { landing: 11, people: 3 },
  },
  {
    //id: addId(),
    image: estellaBrotherRollei,
    orientation: 'horizontal',
    text: "Father's Camera",
    description: {
      title: "Father's Camera",
      location: 'Portland, OR',
      date: 'July 16, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 400 35mm',
      shot: 'Box',
    },
    album: { landing: 12, people: 4 },
  },
  {
    //id: addId(),
    image: fadedGraffiti,
    orientation: 'horizontal',
    text: 'Faded Graffiti',
    description: {
      title: 'Faded Graffiti',
      location: 'Portland, OR',
      date: 'June 10, 2023',
      camera: '"Ike" Fujica AX3',
      film: 'Expired Kroger 400 35mm (UltraMax)',
      shot: '400 / +2',
    },
    album: { landing: 13 },
  },
  {
    //id: addId(),
    image: fadedMural,
    orientation: 'vertical',
    text: 'Faded Mural',
    description: {
      title: 'Faded Mural',
      location: 'Portland, OR',
      date: 'June 10, 2023',
      camera: '"Ike" Fujica AX3',
      film: 'Expired Kroger 400 35mm (UltraMax)',
      shot: '400 / +2',
    },
    album: { landing: 14, location: 10 },
  },
  {
    //id: addId(),
    image: greyTrunk,
    orientation: 'vertical',
    text: 'Grey Trunk',
    description: {
      title: 'Grey Trunk',
      location: 'Suttle Lake, OR',
      date: 'July 10, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '1600 / +2',
    },
    album: { landing: 15, location: 11 },
  },
  {
    //id: addId(),
    image: kaycie,
    orientation: 'horizontal',
    text: 'Kaycie',
    description: {
      title: 'Kaycie',
      location: 'Portland, OR',
      date: 'Sept. 17, 2022',
      camera: '"Ike" Fujica AX3',
      film: 'Expired Kodak TriX 35mm',
      shot: 'Box',
    },
    album: { landing: 16, people: 5 },
  },
  {
    //id: addId(),
    image: longbeachKid,
    orientation: 'horizontal',
    text: 'Sea Kid',
    description: {
      title: 'Sea Kid',
      location: 'Longbeach, WA',
      date: 'Oct. 18, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '800 / +1',
    },
    album: {
      landing: 17,
      location: 12,
    },
  },
  {
    //id: addId(),
    image: momAntonioBeach,
    orientation: 'horizontal',
    text: 'Watchers',
    description: {
      title: 'Watchers',
      location: 'Neskowin, OR',
      date: 'July 28, 2022',
      camera: '"Ike" Fujica AX3',
      film: 'Fomapan 400 35mm',
      shot: 'Box',
    },
    album: { landing: 18, people: 6 },
  },
  {
    //id: addId(),
    image: nikkiSynth,
    orientation: 'vertical',
    text: 'Nikhil Synths',
    description: {
      title: 'Nikhil Synths',
      location: 'Portland, OR',
      date: 'March 6, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Lomography 800 35mm',
      shot: '1600 / +1',
    },
    album: {
      landing: 19,
      people: 7,
    },
  },
  {
    //id: addId(),
    image: notnotsEric,
    orientation: 'vertical',
    text: 'Notnauts: Eric',
    description: {
      title: 'Notnauts: Eric',
      location: 'Specks Records, Portland, OR',
      date: 'July 13, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '800 / +1',
    },
    album: { landing: 20, performance: 1 },
  },
  {
    //id: addId(),
    image: otdHalloween1,
    orientation: 'horizontal',
    text: 'Old Town Diamonds: Halloween',
    description: {
      title: 'Old Town Diamonds: Halloween',
      location: 'Portland, OR',
      date: 'Oct. 27, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Expired TriX 35mm',
      shot: '3200 / +3',
    },
    album: { performance: 2 },
  },
  {
    //id: addId(),
    image: otdHalloween2,
    orientation: 'horizontal',
    text: 'Old Town Diamonds: Halloween',
    description: {
      title: 'Old Town Diamonds: Halloween 2',
      location: 'Portland, OR',
      date: 'Oct. 27, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Expired TriX 35mm',
      shot: '3200 / +3',
    },
    album: {},
  },
  {
    //id: addId(),
    image: parkingLot,
    orientation: 'horizontal',
    text: 'Suburban Parking',
    description: {
      title: 'Suburban Parking',
      location: 'Lake Oswego, OR',
      date: '11-11-11',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 800 35mm',
      shot: '1600 / +1',
    },
    album: { location: 13 },
  },
  {
    //id: addId(),
    image: porterPoint,
    orientation: 'horizontal',
    text: 'Nestucca',
    description: {
      title: 'Nestucca',
      location: 'Porter Point, OR',
      date: 'Nov. 30, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Delta 3200 35mm',
      shot: '800 / Box',
    },
    album: { landing: 21, location: 14 },
  },
  {
    //id: addId(),
    image: proposalRock,
    orientation: 'horizontal',
    text: 'Proposal Rock',
    description: {
      title: 'Proposal Rock',
      location: 'Neskowin, OR',
      date: 'July 28, 2022',
      camera: '"Ike" Fujica AX3',
      film: 'Fomapan 400 35mm',
      shot: 'Box',
    },
    album: { landing: 22, location: 15 },
  },
  {
    //id: addId(),
    image: ripleyGuitar,
    orientation: 'horizontal',
    text: 'Ripley',
    description: {
      title: 'Ripley',
      location: 'Portland, OR',
      date: 'July 6, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Delta 3200 35mm',
      shot: '1600 / Box',
    },
    album: { landing: 23, people: 8 },
  },
  {
    //id: addId(),
    image: schnitzer,
    orientation: 'vertical',
    text: 'Schnitzer',
    description: {
      title: 'Arlene Schnitzer',
      location: 'Portland, OR',
      date: 'April 8, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Cinestill 400D 35mm',
      shot: 'Box',
    },
    album: { landing: 24, location: 16 },
  },
  {
    //id: addId(),
    image: seanCostume,
    orientation: 'horizontal',
    text: 'Halloween Costume',
    description: {
      title: 'Halloween Costume',
      location: 'Portland, OR',
      date: 'Nov. 11, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 800 35mm',
      shot: '1600 / +1',
    },
    album: { landing: 25, people: 9 },
  },
  {
    //id: addId(),
    image: seanGuitar,
    orientation: 'horizontal',
    text: 'Mistons: Rickenbacker',
    description: {
      title: 'Mistons: Rickenbacker',
      location: 'Polaris Hall, Portland, OR',
      date: 'Nov. 17, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '1600 / +2',
    },
    album: { landing: 26, performance: 3 },
  },
  {
    ////id: addId(),
    image: swimBuddies,
    orientation: 'horizontal',
    text: 'Jacuzzi',
    description: {
      title: 'Jacuzzi',
      location: 'Zigzag, OR',
      date: 'June 23, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 400 35mm',
      shot: 'Box',
    },
    album: { landing: 27, people: 10 },
  },
  {
    ////id: addId(),
    image: tessaBeach,
    orientation: 'vertical',
    text: 'Tessa Beach',
    description: {
      title: 'Tessa Beach',
      location: 'Lincoln City, OR',
      date: 'Nov 30, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Delta 3200 35mm',
      shot: '800 / Box',
    },
    album: { landing: 28, people: 11 },
  },
  {
    ////id: addId(),
    image: tessaFlowers,
    orientation: 'horizontal',
    text: 'Tessa Flowers',
    description: {
      title: 'Tessa Flowers',
      location: 'Portland, OR',
      date: 'Nov. 11, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 800 35mm',
      shot: '1600 / +1',
    },
    album: {
      people: 12,
    },
  },
  {
    ////id: addId(),
    image: yaquinaHeadLighthouse,
    orientation: 'horizontal',
    text: 'Spring Light',
    description: {
      title: 'Spring Light',
      location: 'Yaquina Head, OR',
      date: 'April 13, 2023',
      camera: '"Ike" Fujica AX3',
      film: 'Fomapan 100 35mm',
      shot: '200 / +1',
    },
    album: { landing: 29, location: 17 },
  },
  {
    ////id: addId(),
    image: zoranPatSwim,
    orientation: 'horizontal',
    text: 'Swim Boys',
    description: {
      title: 'Swim Boys',
      location: 'Tumalo State Park, OR',
      date: 'June 29, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: {
      people: 13,
    },
  },
  {
    ////id: addId(),
    image: zoranPolaroid,
    orientation: 'horizontal',
    text: 'Instant Zoran',
    description: {
      title: 'Instant Zoran',
      location: 'Portland, OR',
      date: 'July 13, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { landing: 30, people: 14 },
  },
  {
    ////id: addId(),
    image: longbeachDistantHouse,
    orientation: 'horizontal',
    text: 'Distant House',
    description: {
      title: 'Distant House',
      location: 'Longbeach, WA',
      date: 'Oct. 18, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '800 / +1',
    },
    album: {
      location: 18,
    },
  },
  {
    ////id: addId(),
    image: longbeachNoHorizon,
    orientation: 'horizontal',
    text: 'No Horizon',
    description: {
      title: 'No Horizon',
      location: 'Longbeach, WA',
      date: 'Oct. 10, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Expired Kodak TriX 35mm',
      shot: '200 / -1',
    },
    album: {
      location: 19,
    },
  },
  {
    ////id: addId(),
    image: longbeachRestArea,
    orientation: 'horizontal',
    text: 'Rest Area',
    description: {
      title: 'Rest Area',
      location: 'Longbeach, WA',
      date: 'Oct. 10, 2022',
      camera: '"Mina" Minolta SRT100',
      film: 'Expired Kodak TriX 35mm',
      shot: '200 / -1',
    },
    album: {
      location: 20,
    },
  },
  {
    ////id: addId(),
    image: longbeachOrcas,
    orientation: 'horizontal',
    text: 'Orcas',
    description: {
      title: 'Orcas',
      location: 'Longbeach, WA',
      date: 'Oct. 7, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford SFX 200 35mm',
      shot: 'Red Filter/ 200 / Box',
    },
    album: {
      location: 21,
    },
  },
  {
    //id: addId(),
    image: brokenHouseGorge,
    orientation: 'horizontal',
    text: 'Broken House, Gorge',
    description: {
      title: 'Broken House',
      location: 'Columbia Gorge, OR',
      date: 'Jan 29, 2025',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { landing: 31, location: 22 },
  },
  {
    //id: addId(),
    image: bryanShakes1K,
    orientation: 'horizontal',
    text: 'Bryan Shakes',
    description: {
      title: 'Bryan Bathes',
      location: 'Thousand Acres, Portland, OR',
      date: 'Jan 27, 2025',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { landing: 32, people: 15 },
  },
  {
    //id: addId(),
    image: danielSmoking,
    orientation: 'horizontal',
    text: 'Daniel Smokes',
    description: {
      title: 'Last Hurrah',
      location: 'Portland, OR',
      date: 'Aug 10, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '800 / +1',
    },
    album: { landing: 33, people: 16 },
  },
  {
    //id: addId(),
    image: gwapBodecker,
    orientation: 'horizontal',
    text: 'Alex Tasting Cherry Blossoms',
    description: {
      title: 'Gwap Recording',
      location: 'Bodecker Foundation, Portland, OR',
      date: 'Mar 11, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Cinestill 800t 35mm',
      shot: '1600 / +1',
    },
    album: { people: 17 },
  },
  {
    //id: addId(),
    image: mattSavior,
    orientation: 'horizontal',
    text: 'Matt Savior',
    description: {
      title: 'Savior',
      location: 'Portland, OR',
      date: 'Mar 15, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '1600 / Box',
    },
    album: { people: 18 },
  },
  {
    //id: addId(),
    image: morganRiver,
    orientation: 'horizontal',
    text: 'Morgan River',
    description: {
      title: 'River Cooldown',
      location: 'Zigzag, OR',
      date: 'July 3, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 400 35mm',
      shot: 'Box',
    },
    album: { people: 19 },
  },
  {
    //id: addId(),
    image: pdxButohFest2024_1,
    orientation: 'horizontal',
    text: 'PDX Butoh Festival: Paige 1',
    description: {
      title: 'PDX Butoh Festival: Paige 1',
      location: 'Portland Arts Collective, Portland, OR',
      date: 'Apr 5, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak TMax P3200 35mm',
      shot: '3200 / box',
    },
    album: { landing: 34, performance: 4 },
  },
  {
    //id: addId(),
    image: pdxButohFest2024_2,
    orientation: 'vertical',
    text: 'PDX Butoh Festival: Paige 2',
    description: {
      title: 'PDX Butoh Festival: Paige 2',
      location: 'Portland Arts Collective, Portland, OR',
      date: 'Apr 5, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak TMax P3200 35mm',
      shot: '3200 / Box',
    },
    album: { performance: 5 },
  },
  {
    //id: addId(),
    image: pdxButohFest2024_3,
    orientation: 'horizontal',
    text: 'PDX Butoh Festival: Alex',
    description: {
      title: 'PDX Butoh Festival: Alex',
      location: 'Portland Arts Collective, Portland, OR',
      date: 'Apr 5, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak TMax P3200 35mm',
      shot: '3200 / Box',
    },
    album: { landing: 35, performance: 6 },
  },
  {
    //id: addId(),
    image: portBlakeyMillBainBridge,
    orientation: 'horizontal',
    text: 'Port Blakey Mill',
    description: {
      title: 'Port Blakey Mill',
      location: 'Port Blakey Mill, Bainbridge, WA',
      date: 'May 22, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford FP4 35mm',
      shot: 'Box',
    },
    album: { location: 23 },
  },
  {
    //id: addId(),
    image: summerLightKitchen,
    orientation: 'vertical',
    text: 'Summer Afternoon, Kitchen',
    description: {
      title: 'Summer Afternoon, Kitchen',
      location: 'Portland, OR',
      date: 'Mar 15, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '1600 / +2',
    },
    album: { stillLife: 0 },
  },
  {
    //id: addId(),
    image: taylorBirthday,
    orientation: 'vertical',
    text: "Taylor's Birthday",
    description: {
      title: "Taylor's Birthday",
      location: 'Portland, OR',
      date: 'May 15, 2024',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: '1600 / +2',
    },
    album: { people: 20 },
  },
  {
    //id: addId(),
    image: tessaSunsetLowerShades,
    orientation: 'horizontal',
    text: 'Her Shades',
    description: {
      title: 'Her Shades',
      location: 'Lincoln City, OR',
      date: 'Dec 5, 2023',
      camera: '"Mina" Minolta SRT100',
      film: 'Kodak Portra 800 35mm',
      shot: '1600 / +1',
    },
    album: { landing: 36, people: 21 },
  },
  {
    //id: addId(),
    image: vistaHousePuddle,
    orientation: 'horizontal',
    text: 'Vista House: Puddle',
    description: {
      title: 'Vista House: Puddle',
      location: 'Columbia Gorge, OR',
      date: 'Jan 27, 2025',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { location: 24 },
  },
  {
    //id: addId(),
    image: vistaHouse,
    orientation: 'horizontal',
    text: 'Vista House',
    description: {
      title: 'Vista House',
      location: 'Columbia Gorge, OR',
      date: 'Jan 27, 2025',
      camera: '"Mina" Minolta SRT100',
      film: 'Ilford HP5+ 35mm',
      shot: 'Box',
    },
    album: { landing: 37, location: 25 },
  },
];

//dev note: not used

// {
//   ////id: addId(),
//   image: longbeachDistantWalker,
//   orientation: 'horizontal',
//   text: 'Walker',
//   description: {
//     title: 'Walker',
//     location: 'Longbeach, WA',
//     date: 'Oct. 10, 2022',
//     camera: '"Mina" Minolta SRT100',
//     film: 'Expired Kodak TriX 35mm',
//     shot: '200 / -1',
//   },
//   album: {

//   },
// },
// {
//   //id: addId(),
//   image: longbeachOrcasOverhead,
//   orientation: 'horizontal',
//   text: 'Overhead',
//   description: {
//     title: 'Overhead',
//     location: 'Longbeach, WA',
//     date: 'Oct. 7, 2023',
//     camera: '"Mina" Minolta SRT100',
//     film: 'Ilford SFX 200 35mm',
//     shot: 'Red Filter/ 200 / Box',
//   },
//   album: {

//   },
// },
// {
//   //id: addId(),
//   image: longbeachTireMarks,
//   orientation: 'horizontal',
//   text: 'Tire Marks',
//   description: {
//     title: 'Tire Marks',
//     location: 'Longbeach, WA',
//     date: 'Oct. 18, 2024',
//     camera: '"Mina" Minolta SRT100',
//     film: 'Ilford HP5+ 35mm',
//     shot: '800 / +1',
//   },
//   album: {

//   },
// },
// {
//   //id: addId(),
//   image: longbeachWetTireMarks,
//   orientation: 'horizontal',
//   text: 'Wet Sand',
//   description: {
//     title: 'Wet Sand',
//     location: 'Longbeach, WA',
//     date: 'Oct. 10, 2022',
//     camera: '"Mina" Minolta SRT100',
//     film: 'Expired Kodak TriX 35mm',
//     shot: '200 / -1',
//   },
//   album: {

//   },
// },

export default imageData;
