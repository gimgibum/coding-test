class Solution {
    public String[] solution(String[] todo_list, boolean[] finished) {
        int cnt = 0;
        for(int i = 0; i < finished.length; i++){
            if(finished[i] == false){
                cnt++;
            }
        }
        int sum = 0;
        String[] answer = new String[cnt];
        for(int i =0; i < todo_list.length; i++){
            if(finished[i] == false){
                answer[sum] =  todo_list[i];
                sum++;
            }
        }
        return answer;
    }
}