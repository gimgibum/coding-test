class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int a = 0;
        int b = 0;
        int sum = 1;
        for(int i = 0; i<num_list.length; i++){
            sum *= num_list[i];
            a += num_list[i];
            b = a * a;
            if(b > sum) answer = 1;
            else answer = 0;
        }
        return answer;
    }
}