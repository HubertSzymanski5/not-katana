import {JapaneseSymbol} from "../model/JapaneseSymbol.ts";

// TODO: add hiragana
//const HIRAGANA_SYMBOLS: GroupedSymbols = {}

// symbols copied from https://symbl.cc/pl/unicode/blocks/katakana
const KATAKANA_SYMBOLS: GroupedSymbols = {
  basic: [
    {symbol: 'ア', reading: 'a'},
    {symbol: 'イ', reading: 'i'},
    {symbol: 'ウ', reading: 'u'},
    {symbol: 'エ', reading: 'e'},
    {symbol: 'オ', reading: 'o'},

    {symbol: 'カ', reading: 'ka'},
    {symbol: 'キ', reading: 'ki'},
    {symbol: 'ク', reading: 'ku'},
    {symbol: 'ケ', reading: 'ke'},
    {symbol: 'コ', reading: 'ko'},

    {symbol: 'サ', reading: 'sa'},
    {symbol: 'シ', reading: 'shi'},
    {symbol: 'ス', reading: 'su'},
    {symbol: 'セ', reading: 'se'},
    {symbol: 'ソ', reading: 'so'},

    {symbol: 'タ', reading: 'ta'},
    {symbol: 'チ', reading: 'chi'},
    {symbol: 'ツ', reading: 'tsu'},
    {symbol: 'テ', reading: 'te'},
    {symbol: 'ト', reading: 'to'},

    {symbol: 'ナ', reading: 'na'},
    {symbol: 'ニ', reading: 'ni'},
    {symbol: 'ヌ', reading: 'nu'},
    {symbol: 'ネ', reading: 'ne'},
    {symbol: 'ノ', reading: 'no'},

    {symbol: 'ハ', reading: 'ha'},
    {symbol: 'ヒ', reading: 'hi'},
    {symbol: 'フ', reading: 'fu'},
    {symbol: 'ヘ', reading: 'he'},
    {symbol: 'ホ', reading: 'ho'},

    {symbol: 'マ', reading: 'ma'},
    {symbol: 'ミ', reading: 'mi'},
    {symbol: 'ム', reading: 'mu'},
    {symbol: 'メ', reading: 'me'},
    {symbol: 'モ', reading: 'mo'},

    {symbol: 'ヤ', reading: 'ya'},
    {symbol: 'ユ', reading: 'yu'},
    {symbol: 'ヨ', reading: 'yo'},

    {symbol: 'ラ', reading: 'ra'},
    {symbol: 'リ', reading: 'ri'},
    {symbol: 'ル', reading: 'ru'},
    {symbol: 'レ', reading: 're'},
    {symbol: 'ロ', reading: 'ro'},

    {symbol: 'ワ', reading: 'wa'},
    {symbol: 'ヲ', reading: 'o'},
    {symbol: 'ン', reading: 'n'},

    {symbol: 'ー', reading: 'long'},
  ],
  modified: [
    {symbol: 'ガ', reading: 'ga'},
    {symbol: 'ギ', reading: 'gi'},
    {symbol: 'グ', reading: 'gu'},
    {symbol: 'ゲ', reading: 'ge'},
    {symbol: 'ゴ', reading: 'go'},

    {symbol: 'ザ', reading: 'za'},
    {symbol: 'ジ', reading: 'ji'},
    {symbol: 'ズ', reading: 'zu'},
    {symbol: 'ゼ', reading: 'ze'},
    {symbol: 'ゾ', reading: 'zo'},

    {symbol: 'ダ', reading: 'da'},
    {symbol: 'ヂ', reading: 'di'},
    {symbol: 'ヅ', reading: 'du'},
    {symbol: 'デ', reading: 'de'},
    {symbol: 'ド', reading: 'do'},

    {symbol: 'バ', reading: 'ba'},
    {symbol: 'ビ', reading: 'bi'},
    {symbol: 'ブ', reading: 'bu'},
    {symbol: 'ベ', reading: 'be'},
    {symbol: 'ボ', reading: 'bo'},

    {symbol: 'パ', reading: 'pa'},
    {symbol: 'ピ', reading: 'pi'},
    {symbol: 'プ', reading: 'pu'},
    {symbol: 'ペ', reading: 'pe'},
    {symbol: 'ポ', reading: 'po'},
  ],
  extended: [
    {symbol: 'キャ', reading: 'kya'},
    {symbol: 'キュ', reading: 'kyu'},
    {symbol: 'キョ', reading: 'kyo'},

    {symbol: 'シャ', reading: 'sha'},
    {symbol: 'シュ', reading: 'shu'},
    {symbol: 'ショ', reading: 'sho'},

    {symbol: 'チャ', reading: 'cha'},
    {symbol: 'チュ', reading: 'chu'},
    {symbol: 'チョ', reading: 'cho'},

    {symbol: 'ニャ', reading: 'nya'},
    {symbol: 'ニュ', reading: 'nyu'},
    {symbol: 'ニョ', reading: 'nyo'},

    {symbol: 'ヒャ', reading: 'hya'},
    {symbol: 'ヒュ', reading: 'hyu'},
    {symbol: 'ヒョ', reading: 'hyo'},

    {symbol: 'ミャ', reading: 'mya'},
    {symbol: 'ミュ', reading: 'myu'},
    {symbol: 'ミョ', reading: 'myo'},

    {symbol: 'リャ', reading: 'rya'},
    {symbol: 'リュ', reading: 'ryu'},
    {symbol: 'リョ', reading: 'ryo'},

    {symbol: 'ギャ', reading: 'gya'},
    {symbol: 'ギュ', reading: 'gyu'},
    {symbol: 'ギョ', reading: 'gyo'},

    {symbol: 'ジャ', reading: 'ja'},
    {symbol: 'ジュ', reading: 'ju'},
    {symbol: 'ジョ', reading: 'jo'},

    {symbol: 'ビャ', reading: 'bya'},
    {symbol: 'ビュ', reading: 'byu'},
    {symbol: 'ビョ', reading: 'byo'},

    {symbol: 'ピャ', reading: 'pya'},
    {symbol: 'ピュ', reading: 'pyu'},
    {symbol: 'ピョ', reading: 'pyo'},
  ]
}

export default class SymbolsService {
  loadSymbols(types: SymbolTypes[], levels: SymbolLevels[]) {
    let result: JapaneseSymbol[] = [];
    if (types.includes(SymbolTypes.KATAKANA)) {
      console.log("Loading KATAKANA symbols");
      if (levels.includes(SymbolLevels.BASIC)) {
        console.log("Loading BASIC level");
        result = [...result, ...KATAKANA_SYMBOLS.basic]
      }
      if (levels.includes(SymbolLevels.MODIFIED)) {
        console.log("Loading MODIFIED level");
        result = [...result, ...KATAKANA_SYMBOLS.modified]
      }
      if (levels.includes(SymbolLevels.EXTENDED)) {
        console.log("Loading EXTENDED level");
        result = [...result, ...KATAKANA_SYMBOLS.extended]
      }
    }
    return result;
  }
}

export enum SymbolTypes {
  HIRAGANA,
  KATAKANA
}

export enum SymbolLevels {
  BASIC,
  MODIFIED,
  EXTENDED
}

interface GroupedSymbols {
  basic: JapaneseSymbol[],
  modified: JapaneseSymbol[],
  extended: JapaneseSymbol[]
}