class Solution:
    def solve(self, board) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        visited = [[0 for _ in board[0]] for _ in board]
        self.to_flip = []
        
        def fail():
            for i,j in self.to_flip:
                visited[i][j] = 1
            self.to_flip = []
            return
        
        
        def fun(x,y):
            if x in {0,len(board)-1} or y in {0,len(board[0])-1} or visited[x][y]:
                fail()
                return
            
            for i,j in [(x-1,y),(x,y-1),(x+1,y),(x,y+1)]:
                if board[i][j] =='O' and visited[i][j]:
                    visited[i][j] = 1
                    fail()
                    return
                else:
                    if board[i][j] =='O' and (i,j) not in self.to_flip:
                        self.to_flip.append((i,j))
                        fun(i,j)
                       
            for i,j in self.to_flip:
                board[i][j] = 'X'
            self.to_flip = []
            return
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                if not visited[i][j]:
                    if board[i][j] == 'O':
                        self.to_flip.append((i,j))
                        fun(i,j)

s =  Solution()
s.solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])