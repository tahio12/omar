import java.util.*;

class HybridSort {
	public static void main(String[] args) {

		int[][] Tests = {
				{},
				{6, 2, 8, 5, 7, 5, 0, 2},
				{2,2,2,2,2,2,2,2},
				{4, -7, 2, 1, 0, 2, 4, 2, -3, 3, -3, 7, -2, 7, 7},
				{-2, -2, -4, -9, -1, -6, -1, -14, -3, -15, -12, -12, -2, -8, -9},
		};
		for (int[] S: Tests) {
			try {
				System.out.println("Given array: " + Arrays.toString(S));
				S = hybridSort(S); //change the name of function if necessary
				System.out.println("Array sorted: " + Arrays.toString(S));
			}   catch (Exception e) {
				System.out.println("Error for array: " + Arrays.toString(S));
				System.out.println(e);
			}
		}
	}

	public static int[] hybridSort(int[] S) {
		boolean toSwitch = true;
		int n = S.length;
		int b = 0;
		int LowestValue;
		if(n == 0){
			toSwitch = false;
		}
		while (toSwitch){
			LowestValue = b;
			toSwitch = false;
			for(int i = b; i < n -1 ; i++){
				if(S[i] > S[i + 1]){
					swap(S, i, i+1);
					if(S[i] < S[LowestValue]){
						LowestValue = i;
					}
					toSwitch = true;
				}
			}
			swap(S, LowestValue, b);
			n = n-1;
			b++;
		}
		return S;
	}
	public static void swap(int[] s, int o, int r){
		int t = s[o];
		s[o] = s[r];
		s[r] = t;
	}
}