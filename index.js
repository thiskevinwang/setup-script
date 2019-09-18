module.exports = (req, res) => {
  res.end(`
  proj=$(git remote -v | head -n1 | awk '{print $2}' | sed 's/.*://' | sed 's/\.git//')
  tag1=$(git describe --abbrev=0)
  tag2=$(git describe --abbrev=0 --tags \`git rev-list --tags --skip=1 --max-count=1\`)
  
  prev=https://github.com/$proj/compare/$tag2...$tag1
  curr=https://github.com/$proj/compare/$tag1...master
  
  open $curr
  `);
};
