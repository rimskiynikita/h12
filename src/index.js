import express from 'express';
import cors from 'cors';

function shortenName(fullname) {
  const fullnameArray = fullname.split(' ')
  console.log(fullname.replace(/ /g,''))
  const regex = /^[a-zа-яÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]+$/i
  var shortenFullName = ''
  if (fullnameArray.length <= 3 && fullnameArray != '' && regex.test(fullname.replace(/ /g,''))) {
    shortenFullName += fullnameArray[fullnameArray.length - 1]
    if (fullnameArray.length != 1) {
      for (var i = 0; i < fullnameArray.length-1; i++) {
        shortenFullName += ' ' + fullnameArray[i][0] + '.';
      }
    }
  } else {
    shortenFullName = 'Invalid fullname'
  }
  return shortenFullName
}

const app = express();
app.use(cors());

app.get('/task2B', (req, res) => {
  const fullname = req.query.fullname
  const shortenFullname = shortenName(fullname)
  res.send(shortenFullname)
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!')
});
