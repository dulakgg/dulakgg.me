import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type Props = {
    icon: string,
    alt: string,
    linkGitHub: string,
    title: string,
    desc: string,
    linkGeode?: string,
    unfinished?: boolean,
    unreleased?: boolean,
    gdVersion: string,
    wIP?: boolean,
    superseded?: boolean
}

export default function ModTIle({ 
icon, 
alt, 
linkGitHub, 
title, 
desc, 
linkGeode, 
unfinished, 
unreleased, 
gdVersion,
wIP,
superseded,
}: Props) {
  return (
    <li className="text-center border-border border-5 rounded-xl p-3 w-100 mb-10">
        <div className="flex justify-center mb-2">
            <Image
            src={icon}
            alt={alt}
            width={256}
            height={256}
            className="rounded-xl"
            />
        </div>
        <h2 className="text-3xl">{title}</h2>
        <h3 className="text-xl">{desc}</h3>
        <div className="flex justify-center gap-3 flex-wrap">
            <div className="border-2 rounded-full pl-3 pr-3 mt-2 mb-2 bg-sky-400">
                <p className="text-lg">{gdVersion}</p>
            </div>
            {unfinished && 
                <div className="border-2 rounded-full pl-3 pr-3 mt-2 mb-2 bg-amber-300">
                    <p className="text-lg">Unfinished</p>
                </div>
            }
            {unreleased && 
                <div className="border-2 rounded-full pl-3 pr-3 mt-2 mb-2 bg-amber-600">
                    <p className="text-lg">Unreleased</p>
                </div>
            }
            {superseded && 
                <div className="border-2 rounded-full pl-3 pr-3 mt-2 mb-2 bg-rose-600">
                    <p className="text-lg">Superseded</p>
                </div>
            }
            {wIP && 
                <div className="border-2 rounded-full pl-3 pr-3 mt-2 mb-2 bg-emerald-600">
                    <p className="text-lg">WIP</p>
                </div>
            }
        </div>
        
        
        <ul className="flex justify-center gap-5">
            <li>
                <Link href={linkGitHub}>
                    <FaGithub size={48} />
                </Link>
            </li>
            <li>
                {linkGeode && 
                    <Link href={linkGeode}>
                        <Image
                            src="https://github.com/geode-sdk/docs/blob/main/assets/geode-circle.png?raw=true" 
                            alt="Geode Icon"
                            width={48} 
                            height={48} 
                        />
                    </Link>
                }
            </li>
        </ul>
    </li>
  );
}
