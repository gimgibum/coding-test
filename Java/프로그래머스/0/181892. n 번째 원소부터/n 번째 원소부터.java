class Solution {
    public int[] solution(int[] num_list, int n) {
        int leng = 0;
        for(int i = n-1; i < num_list.length; i++){
            leng++;
        }
        int[] answer = new int[leng];
        int cnt = 0;
        for(int i = n-1; i < num_list.length; i++){
            answer[cnt] = num_list[i];
            cnt++;
        }
        return answer;
    }
}