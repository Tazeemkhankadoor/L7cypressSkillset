function findWord(grid, word) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    
    function dfs(i, j, idx) {
        if (idx === word.length) {
            return true;
        }
        if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j] || grid[i][j] !== word[idx]) {
            return false;
        }
        visited[i][j] = true;
        const res = dfs(i + 1, j, idx + 1) || dfs(i - 1, j, idx + 1) || dfs(i, j + 1, idx + 1) || dfs(i, j - 1, idx + 1);
        visited[i][j] = false;
        return res;
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
    
}
grid = [['x', 'c', 'a'], ['d', 'y', 't'], ['o', 'g', 'z']] 
word = 'xdogy'
if (findWord(grid,word)){
    console.log("found")

}
else{
    console.log("Notfound")
}
