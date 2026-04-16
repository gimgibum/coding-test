class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        String sum ="";
        String sum2="";
        for(int i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 == 0){
                sum += ""+num_list[i];
            }else sum2 += ""+num_list[i];
        }
        answer = Integer.parseInt(sum)+Integer.parseInt(sum2);
        return answer;
    }
}