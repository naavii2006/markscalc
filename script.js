document.getElementById('marksForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const mental = parseInt(document.getElementById('mental').value) || 0;
  const math = parseInt(document.getElementById('math').value) || 0;
  const language = parseInt(document.getElementById('language').value) || 0;

  const totalCorrect = mental + math + language;
  const totalMarks = (totalCorrect * 1.25).toFixed(2);
  const percentage = ((totalMarks / 100) * 100).toFixed(2);

  document.getElementById('totalMarks').textContent = totalMarks;
  document.getElementById('percentage').textContent = percentage;
  document.getElementById('resultSection').style.display = 'block';
});
