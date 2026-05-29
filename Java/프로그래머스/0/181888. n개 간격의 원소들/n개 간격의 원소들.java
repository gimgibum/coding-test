class Solution {
    public int[] solution(int[] num_list, int n) {
        int leng = 0;
        for(int i = 0; i<num_list.length; i++){
            if(i%n==0){
                leng++;
            }
        }
        int sum = 0;
        int[] answer = new int[leng];
        for(int i = 0; i < num_list.length; i++){
            if(i%n==0){
                answer[sum] = num_list[i];
                sum++;
            }
        }
        
        return answer;
    }
}