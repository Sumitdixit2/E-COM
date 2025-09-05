

type cardProps = {
    urlNum?:number,
    url?:string,
    name:string,
    price?:number,
}

const URL:Array<string> = ["https://lh3.googleusercontent.com/aida-public/AB6AXuB9684B5e4OaCYcKclFxVtbcWzuPhKtqMspNBuIrIdclFBuoyWQne2OD19h0pio1t5m4U-LdkshCqWq8BUcfDxjIs-TvK-lmK4FTbKgZZdWxhvPy1DCHFyin9-tbEZMT2W2BEzU-evxc5KlfpqJbRgpCgY2yh-tJD72GLwawgZRoJXY4pTKbD3JPr4RRAPQeTJXkicNFy-icCIA43P9YaCqIIalaFA9KJ1YGoec3xk3DAyWftDjRz8Z9CTEaKSnD-7SALD2R3XBvs4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9tztWRA4UO3e_v3ZFY2vlEVe0nGitTBPZd7NdkbX6h04i-4yv4xDQ4KJktOyx3grK51v73OCOtRUDx4VwmxNcjMDH7XFgZKCdpqJkYWJ8tbvNOVHYyhBmVmrccJyQ7uEvpioaaybntr2nGOX_QQaCynM8K_DTAH4YsujbPG_WZLT2GbhRNUVjpdSIb_t7xHLyJg7tIsFEcZMMcZo50XG9mqnRibnknvmpkrPxE6txHnIeUC4pclP8m3Sdop8QxqZwbTTuU9DYYhU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCM98heb_vu80o2Hl_scg2-XvLdjtufQsmnoKh_Gr8k7iqd7byMyIxSNK-e0JRgFiirL28FPzeACAIDWWe4yJ7ngM7HnaWdij-XcdZtg672NJ9jEKZgKJh9KoGzpPwbe3bpVz2vuDJU8179g835tJS1YLgY0Eqzf4Ic0k5LHnevk1x6teNzLXA5GZQ-coCT37BDVWXqzOdY5CX4I4YMvlsx4zmtt3UqQXjHaQSuPviTehsSqDXDDZ_I8EQpa81ozStslCrsUl3H410",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2CMyrjE4oHI_6Rd4yWr56tMDYwSnvQJVTmili7ga4yXenbU-mcFVleiIyLQJEZYoxeOHmUtcFt2Gu3F5WHQ6Pk7n8O8jaRNCzFAU51hd1jvMsdfp54t2hffBVgiv_YMgMxR9t90_HAh0dv6-z32c4ytCpeRFHnmFZmINpiTsxg-l3T-Cg4eky5HLqPGaUWLgHuzJEalayo1kJx6nVxEU0DoQxyj7AKKr48xkfuXErLigEonvF-UuzHT7sAJTlKyxSIyGJvsGmCjU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4c52k49kVBmzTaQupXsrWOEO8hlCmAT5JpCUNUz1UBtVXGX4ht-7nc-6PggRV3ETAaiXsERiKY0YmZT8JFwfobkjZZaBxjxPaTzk_6bsHBgLE01mxbWx9PfmRStegO83AHneWENRDWB7yVEUWBiZ7neZ8-87ONvIerF5S364Pw5txk5YKHiMzwfoMmrjvlXBNdFbNvPBoSUAK_xS_kwcEfNBgP2k-uSf_dSf3PZFAqoPW4tHxmP-xd_5sPGgrdY0l0gZXDsCCdDY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnw9TcdY2X5Mg7B_1fTbtZDQDuqu16eXDEZAB2HGdKNa-JP4Ni-bT7EY4a4QN233jKp7qQlUqtef5dmuwux4tuH5h8r7BTWkfTtSmu5VzgDRx0hxSmXDgcNYrVTNT1ut1h66bL1ZJmmf0fSVyYQrncyY0jXpZJzTBpBGL05lcCneyF44uaXy5tVoG2H07HJA75BvGI77n5ZSENisxaRuFghpRUA10vWHYCj8znNKdbSXJ6OwjM4f4hWZ5NI-gvvT7PFfFyi6P_PNg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCO6HAa1sF693Dr8T8rrPZBpkcB1n8WVckcf2BW8OA9-ZNuDYSSs-BXXWSPVJ7AvJO6WfIrLXT1Iy6SYTHfOgjfi7z8ImtsTDbhlzoBpq0sCatl75GMnWGo70qnepdSehmsHFbFxifL58eMBXDsywTJlMdRCAQvMRJwBtjUj29k7XMWaDGi2C3zQfJCT7OXYbZAsJdyjCjg0iTmlJcVZqSCGfL7zja7wSvVhIi2c2x6rcD6yE6lCUinz9DWrrIWBF9Z-i7sJUJ4750",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSR6LAMsfriIJwbCvFqyjyiOwnAonzyyoALizCf4DwMN2A72ivXfm8g8SFI0twJrwYRYG99EaYYc2P-DmAsKWMpPz-PDRDKZaCp0Se8gl5qF0Y-2s0JKIFSz8Pq32tWcVogH8yGfwSavTLQGZG9FvFzR2jSP-5_EHvisu_Tj1A0LuRMG7L-ofHwO9Pjfc5KBslxMr2q38yQ-SC72YZvh9TLEfdYq-_Xj4RR1jcfb-iOts9ObsTu-K03XB8Br_aCv4fpar1I1jYrZY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wfwc6sn-lyOjydo__C_DQaScp6t-PcUcrHR3yatWxXQs82SA3eHUmLbqCW2Z03YUqrAE1-VEFEDNjcmnOaTKIjhi4HOFrZf4mIIYFIXCunYlCLRmEuxPHdtS6FBOQF75asRDC4WBQGy5AxzkX7CNMn-KDtd9yasXi56GQZtR9yQjMvrdtgAmfmqZruFqqc4cLukjW2O8Kr2VYh0MK7nOZWyl8tM8gf1cEhIlyYbVt8n5S0DzYq40VQv1EAcR8riyEeUmSY9A3qg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGPv02WmlE_PUYATdXno-QEZuE4Gzs93paMil2Qhst2Lym1tyQdFdMeyDeGUAzZUdD470FgTdXl2ob-hfLC-k-KRraZciU-9hf3biZwHvhCEkK_pCKmeIpA0rlXt7Za0QhsLwt7tEsARHs0Lk8Yd_seknSjf1FoGlcgHQ0pyjSSizjqIqnTWpyr9KyVeAxXcJSqFVw-yRNCizVZxMM4VnzLjlI6gpDIlWj9YMmYdIyv0iJk9sI0UQf-lfiwR87ccicbnw8Q3CSRI8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDd4kKBnY2nVt9JHAQfNpR4liD8TiTXRxeetbjxB4r35ieSm2QqXEZ40Dzlid8ly2XHzsgqXytv1Yux7QEyJQ_vvzQtP8HlvWrkmZc48m5mLOotHURtCmg8ZNBYyyYcb0JoEde09MrGGXdviRrw5E_adXj7x25YmDVmqzAshsgrOCNoD3yODv0gEBatRVpva6bgF-anfU5-atP2nfTuhK8A7roH3I8OfOPYk8oB3y6z8XKwFr4roInBjO5CYBrKjlwf4yfMTpwMqLs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTjj-OhdzS2GgqPBMEajSR55wREuPahLie5w4Kb8keIhln0DEXUfWPDXGw2HZQhio_2AsRISLSJPHn2Tl8PwOLCEIqR7e5TQALB4UdZZ_m0VmArQ-iFkYCseCDim5-7YDfw5sMAI92e8GobkQFftXyy5T_hBL0UU5K_NRgoWx7O1I4Q93RmgJSGqMoREJNrXehem3TfZP9wIRSFTC3a4ZsXoJcTDbPofaTYjzQxdyTxyG3m43XQi0Z8a4EQ1v1S68lkEKMOWn7hvE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkQb81E06gjEWtUC47YMj8CjYfuGTA-K6jENh8qZrnQ36mt762R2LUjuUiInYohHTr-TNXs8RedwRrwhzgTHrB-2A5fE_tc0C2bUdAsJcidT3ZLw4ImLWIqCsJxRoozlioZFSeDwSzSKwqSEzVvOG4Dzf-oUks6dz8ABVANKCb8GcaUFfKjdfMTKuAHG6hNWOrjA2v6SvvuLp_qYDCF2nKDToPYDw8krt_bgFd7vVRrLAKgYYB-fM-JtXIENENJLiJex-XU4xuHZk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnhOERAwKCN12mcVNZnI3IvWEVWFPMVxS832DybowHnyBlRivXhVrHDrpDH4yNA-rv4VNDziW2GA3uj4k87WEPQ8PuqpcS0V0osh2mx5YH1k74KhiLCnspVy0FKYVZpZqviPZbSjtQE92z0gIC5pcveyjTcHJHG4k5cyP5btZozO_q0ja8JcHw4Se9Mp6cOp64upXYWF31gEJmlDI5wKeofMSStN_r8gu1iXcKzD72Jf7j_jF6vZrcGnhB-vjf1PeSOkmZfOTVNqA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZJwWXsYylZh9nnEQXKHaN-LfahSRsCyAppBkrZMpYPfd62PlkH1o_yypoKO-bk4lTolcTWp1T9LkzzFetdvnLtr90AFscFf7djtszlaA9h4TCXezEVUbd6vOEZtyiSCMJx9xm0ZqT--gmDJL_MRT_ouo0OsTI-KIeuqA0svQTq0u8GbHm74KBx8u0jsrVfgKphONJmPKxoBeCNTwXBSYdQ0lNkwzxn1GmHQP9b8DwwTruqY5VOcs-VYPX__KRJzvdlFux7677CHg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDLg5be1s4YsvS-MeegoMRnlfS1hHQRDyi_JGHCgyUngwX188_Wd5AMhwTfgIXairYsy83PPVzblkQbwlBIWfur7j-61A4qryuI05X4xW3AJglPxfpX6vvPTNCR71ngHfd7SFfrnVMnz64nMItIX4O3vLpV2oKqZk61UtJZlhxlOdB_0jyegTKb53n6lLTDcdGS0OMRlUKatLMWNuZsCmwhIAKOFZkxifVxPhB87uRLKRJv30FQ1J0R9C9BD60tqWzoZs5IXX0iA7g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4e1-GS04_tPA3wak1tmVW_Sg99J9ql7dpfVdAV7O71S0lrUbHrBsgZKQtETID6cNt6XFlJwi34xvzGAbyYBLQ0tyiuUcjwGjfaMjC4kQbRi4ewa0YXD4DrDX9xwtYDtpLC-Tj-axi1r4wHZsJzXpF_gIWuKH3HQz1ost84kl9X9s5T4spQi6I6N_D0CFkXPcayomF_v2RLJXCwQfmG8ARoRrStr9t62Nu_1msBPXqORkBA9FjWIq86e2zIHn-48FzIyQVkEZM1zM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDowtTwDCsGPGqYe6QDyHUGJ0T4mFwonqhvjVUSyzPANdZdIyFOS7UXE8BnD6Hf-KdjYTaQctkxoDgIW4CsfeovaAMKE6pKclhN8VWUSTtSVfgaO1pz1U461gRRafOMVgkJbil-3JJxjzrvuxsCFotMP-2e3cnv8bnJZHbjy-LqMA1MeXepTLoafjP65vX9WTyswNjzngeiHf6BgYZ3Wg9XhImDxQixgJxhPRrcQVETyEibkRHarhHHkCCgeOwPWxKILwzv3nHD9-U",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBt3E7iNhUrYPql58rtjZ_xiL0JYdYjlPLdmdhDIslz-rlGK04GGen-MVk8FOws86PO7CYZgsHqNxlM0yFvth4s0wFFDDoMhibgzK-4gtbSp_egB5GfsvjjWNo4RU8LZZKa0VjjdG-3woRAL6_0v1VZn3oB3MHlgC8dElPBAwn8l1pHV6d-XW6NEkD_eriY305N87-f-8r_fR9xa_k06spsclAJvxiTYgaaw7VTd6O-yc0ej6wQvI7xhhgVJzVn1KKAsKWmYXnCMcs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBa9K-8ck4JI8foywRUtn6XGW4Wz0AKSW9HjJmAybKX6JNc2yHYOZeR0xFs69DzTwUBi2UMPseCSmSiWAYH6OSgoEBjpL9_GLBLW5MIdtcO9sexKsE0u-PeQeuZv9ss6emQz7pqSTXPxXq74cKm7Yyci8PYKpaV3UiCknTe9fL_gRcsPclWhAZiZ1T7UnmkYKj8aAEof8U6nMMSb9-5ZWBrlhdU3cpFyq4GsOFgj_1BS9GJqMea3pKSKeh6ELKo4WkP9IHCA_i38tg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCMJYOMH5QgqjsME_odcnSU0J3XNPYYjJJsPSKOVWbf1Pe1bHNUTvSxTGH1kseDh6OdnUuOpIsWEvpuhod2zogYWknaezBFvlk4bpOHOmhpV9zizrglhRKR7cn9OJdBBA40a-aojJhytjo9t4rVKj7vmvZQtfN2H6K51kSV9rCBHRH587i5XGDvFs7pkdNxSbZ_Cx2MlXoNszA-zE8PfVAWNwIqfM64rh51kH0h3YNjt0ysx2wtAEU_yD9IB7T4kjFrzONCQSBdETs",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6zhFHBYRy2yVXvokPat8fo4nyZCuJ6ytr-2M7WrnQUAwwYWksxq5MFFKsA2B2OuaB24JJbCcT_9EwlKzEZpBz5Eqg1f0fCYP93c9D_0FOdQd6Djz_YScaNBkNulzARu-EVdRlCf5yn33oFZ0q0xxZhzQa31KlzijTXwJEmnFy1V_ebJo-41LK0bh9V4y7sf98K1pb5Z3_wq6MH62Yr7Fbbic_hdLreMP1UncpOBUvI3TgNF9NSYwMwfnd-TJ4oOUcHtbOzh1aPEM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCYT1PNgmIK3sfgRPOU8VQwItQnWPbNNRXoR8L2EEL3MB9-BtATGijFYpW9vHTsPGM_z6TfVIRJPHjZjnRmC_rm0DdexsWfY_B_YDz5wdBO4B4dADXdMreVB5lv65XVZqT-8OZgNuv-TjugWBmVdrDPh9TsoyBou9fPuI3tstbJeVJNgkDyBN__qyAE3m6CfhdsqPUfqqw_evS97NJS7XU7abiOmk-dQ5HTzR7uRzQlKI0_i-h-008_Tzg-cUcUdcmVyvoFo9L4Re4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTPg5rtIKkgwtC91LL2HX-FERzJHmOla8s14m0LnuyN8UKx_BDnLADoKdqr3bYMQyHlEdy6Ql4oLQqtCjWJmD7UrLxuPE0Z1ATdvPsHDxFN_uuFPxbdTF0SCy2XT5STvaNiGSY15FC7yHyHmtg7svFW_N4JkW8V2eXp1EdIv34Su44H8TIjHOJsO2twxIXooE7vDenDi6PNRaeRRp-W3Ja9HuR54jyBEQW55AEwx-KsxKoXdMHnoiXQvlKetKWdMgYeFXXfrBFfts"
]




function Card({urlNum=0,name,price,url}:cardProps) {

  return (
    <>
                <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col items-center gap-4 rounded-lg w-52  min-w-40 hover:bg-accent">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{
    backgroundImage: `url("${url ? url : URL[urlNum]}")`
  }}
                  ></div>
                  <div>
                  <h2 className="text-[#111418] text-center text-base font-medium leading-normal">{name}</h2>
                  </div>

                {price ? <p>${price}</p> : null}

                </div>
              </div>
            </div>    
    </>
  )
}

export default Card