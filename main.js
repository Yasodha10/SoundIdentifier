function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AOS6j_S1Z/model.json'
    , modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}